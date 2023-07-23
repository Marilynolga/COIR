import {DataTypes} from 'sequelize';
import db from '../config/db.js';

const Servicios = db.define('servicios', {
    nombre: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
});


export default Servicios;