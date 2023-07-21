import express from "express"
import { admin, crear } from '../controllers/proyectosController.js'

const router = express.Router()


router.get('/proyectos', admin)
router.get('/proyectos/crear', crear)


export default router