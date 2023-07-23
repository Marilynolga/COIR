import { exit } from 'node:process'
import servicios from './servicios.js'
import precios from './precios.js'
import proyectos from './proyectos.js'
import dpto from './dpto.js'
import Servicios from '../models/Servicios.js'
import Precio from '../models/Precio.js'
import Proyecto from '../models/Proyecto.js'
import DPTO from '../models/DPTO.js'
import db from '../config/db.js'


const importarDatos = async () => {
    try {
        //Autenticar
        await db.authenticate()

        //Generar las columnas
        await db.sync()

        //Insertamos los datos ex: await Precio.bulkCreate(precios)
        await Promise.all([
            Servicios.bulkCreate(servicios),
            Precio.bulkCreate(precios),
            Proyecto.bulkCreate(proyectos),
            DPTO.bulkCreate(dpto)
        ])
        


        console.log('Datos Importados Correctamente')
        exit()

    } catch (error) {
        console.log(error)
        exit(1)
    }
}

const eliminarDatos = async () => {
    try {
        await db.sync({force: true})
        console.log('Datos Eliminados Correctamente');
        exit()
    } catch (error) {
        console.log(error)
        exit(1)
    }
}

if(process.argv[2] === "-i") {
    importarDatos();
}

if(process.argv[2] === "-e") {
    eliminarDatos();
}