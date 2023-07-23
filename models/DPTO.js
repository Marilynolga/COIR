import {DataTypes} from 'sequelize';
import db from '../config/db.js';

const DPTO = db.define('dpto', {
    nombre: {
        type: DataTypes.STRING(4),
        allowNull: false
    }
});

export default DPTO;