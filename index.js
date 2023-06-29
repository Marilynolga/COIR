import express from 'express' //framework para generar pag web
import usuarioRoutes from './routes/usuarioRoutes.js'; //archivo que administra la ruta de mis aplicaciones
import proyectosRoutes from './routes/proyectosRoutes.js'
import db from './config/db.js'; 

//crear el nombre de variable de la aplicacion
const app = express()

//Habilitar lectura de datos de formularios
app.use(express.urlencoded({extended: true}))

//Conexion a la base de datos
try {
    await db.authenticate();
    //Genere las tablas sync() si no existen
    db.sync()
    console.log("Conexion correcta a la Base de datos");
} catch (error) {
    console.log(error);
}

//habilitar pug
app.set('view engine','pug')
app.set('views','./views')

//declarar carpeta pública
app.use(express.static('public'))

// Routing
app.use('/auth', usuarioRoutes)
app.use('/', proyectosRoutes)

// Definir un puerto y arrancar el proyecto
const port = 3000;

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});