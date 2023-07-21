import express from 'express'
import {inicio} from '../controllers/appController.js'

const router = express.Router()

// Página de Inicio
router.get('/', inicio)

// Página Categoría
//router.get('/categorias/:id', categoria)

// Página 404 router.get('/404', noEncontrado)

// Buscador router.post('/buscador', buscador)


export default router;