import {DataTypes} from 'sequelize';
import db from '../config/db.js';

const Servicios = db.define('servicios',{
    idServicios: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull:false
    },
    descripcion: {
        type: DataTypes.STRING(500),
        allowNull:false
    }
    imagen: {
        type: DataTypes.STRING(300),
        allowNull:false
    }

})

export default Servicios;