import {check, validationResult} from 'express-validator'
import Usuario from '../models/Usuario.js'
import {generarId} from '../helpers/tokens.js'
import {emailRegistro} from '../helpers/emails.js'

const formularioLogin = (req, res) => {
    res.render('auth/login', {
        pagina: 'Iniciar Sesión'
    })
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear Cuenta',
        csrfToken : req.csrfToken()
    })
}

const registrar = async (req, res) =>{

    console.log(req.body)

    //validación
    await check('nombre').notEmpty().withMessage('Nombre no puede ir vacio').run(req)
    await check('email').isEmail().withMessage('El email no es válido').run(req)
    await check('password').isLength({ min: 6 }).withMessage('El password debe ser de al menos 6 caracteres').run(req)
    await check('repetir_password').equals(req.body.password).withMessage('Los passwords no son iguales').run(req)
    
    let resultado = validationResult(req)

    //return res.json({resultado.array()})

    // Verificar que el resultado este vacio
    if(!resultado.isEmpty()){
        //Errores
        return res.render('auth/registro', {
            pagina: 'Crear Cuenta',
            errores: resultado.array(),
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }

    //Extraer los datos
    const { nombre, email, password } = req.body

    //Verificar que el usuario no este duplicado
    const existeUsuario = await Usuario.findOne({ where : { email }})
    if(existeUsuario){
        return res.render('auth/Registro', {
            pagina: 'Crear Cuenta',
            errores: [{msg: 'El usuario ya está registrado'}],
            usuario:{
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }

    //Almacenar un usuario
    const usuario = await Usuario.create({
        nombre,
        email,
        password,
        token: generarId()
    })

    //Envía email de confirmación

    emailRegistro({
        nombre: usuario.nombre,
        email: usuario.email,
        token: usuario.token
    })

    //console.log (existeUsuario)

    //return;

    //Mostrar mensaje de confirmación
    res.render('templates/mensaje',{
        pagina: 'Cuenta creada correctamente',
        mensaje: 'Hemos enviado un email de confirmación, presiona el enlace'
    })

}

//Función que comprueba una cuenta
const confirmar = async (req, res) =>{

    const { token } = req.params;

    //Verificar si el token es válido

    const usuario = await Usuario.findOne({ where: {token}})

    if(!usuario){
        return res.render('auth/confirmar-cuenta',{
            pagina: 'Error al confirmar tu cuenta',
            mensaje: 'Hubo un error al confirmar tu cuenta, intenta de nuevo',
            error: true
        })
    }

    // Confirmar la cuenta
    usuario.token = null;
    usuario.confirmado = true;
    await usuario.save();

    res.render('auth/confirmar-cuenta', {
        pagina: 'Cuenta Confirmada',
        mensaje: 'La cuenta se confirmó correctamente'
    })

}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password', {
        pagina: 'Recupera tu acceso a COIR'
    })
}

export {
    formularioLogin,
    formularioRegistro,
    registrar,
    confirmar,
    formularioOlvidePassword
}