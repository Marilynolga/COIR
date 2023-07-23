import Precio from "../models/Precio.js"
import Servicios from "../models/Servicios.js"
import Proyecto from "../models/Proyecto.js"
import DPTO from "../models/DPTO.js"

const admin = (req, res) => {
    res.render('proyectos/admin', {
        pagina: 'Mis proyectos',
        barra: true
    })
}

// Formulario para crear una nueva propiedad
const crear = async (req, res) =>{
    // Consultar Modelo de Precio y Catgeorias
    const [servicios, precios, proyectos, dptos] = await Promise.all([
        Servicios.findAll(),
        Precio.findAll(),
        Proyecto.findAll(),
        DPTO.findAll(),
    ])

    res.render('proyectos/crear', {
        pagina: 'Crear Proyectos',
        barra: true,
        servicios,
        precios,
        proyectos,
        dptos
    })
}

export {
    admin,
    crear
}