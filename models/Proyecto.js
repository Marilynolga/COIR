import {DataTypes} from 'sequelize';
import db from '../config/db.js';

const Proyecto = db.define('proyectos', {
    nombre: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
});


export default Proyecto;