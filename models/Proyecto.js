import {DataTypes} from 'sequelize';
import db from '../config/db.js';

const Proyecto = db.define('proyecto',{
    idProyecto: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull:false
    },
    direccion: {
        type: DataTypes.STRING(100),
        allowNull:false
    }


})

export default Proyecto;