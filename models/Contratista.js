import {DataTypes} from 'sequelize';
import db from '../config/db.js';

const Contratista = db.define('contratista',{
    idContratista: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    ruc: {
        type: DataTypes.STRING(11),
        allowNull:false
    },
    razonSocial: {
        type: DataTypes.STRING(100),
        allowNull:false
    },
    direccion: {
        type: DataTypes.STRING(100),
        allowNull:false
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false,
    }
    ,
    celular:{
        type: DataTypes.STRING(15),
        allowNull: false,
    }


})

export default Contratista;