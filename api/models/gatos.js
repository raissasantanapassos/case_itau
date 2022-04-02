"use strict";

const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Gatos extends Model {}

    Gatos.init(
        {
            nome_gato: DataTypes.STRING,
            informacao: DataTypes.STRING,
            temperamento: DataTypes.STRING,
            origem: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'gatos',             // Nome da tabela no BD mysql
            timestamps: false,
        }  
    );

    return Gatos;
}