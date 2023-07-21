import {DataTypes} from 'sequelize';
import db from '../config/db.js';

const DPTO = db.define('dpto',{
    idDpto: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nombreProyecto: {
        type: DataTypes.STRING(100),
        allowNull:false
    },
    Piso: {
        type: DataTypes.STRING(5),
        allowNull:false
    },
    nroDpto: {
        type: DataTypes.STRING(4),
        allowNull:false
    }


})

export default DPTO;