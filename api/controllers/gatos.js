const Sequelize = require('sequelize')
const Gatos = require('../models/gatos');

module.exports = {
    async getAll(req, res) {
        const sequelize = new Sequelize('apigatos', 'root', '123456', {
            host: 'localhost',
            dialect: 'mysql',
        });
        
        // console.log(sequelize);
        
        const gatos = await Gatos(sequelize, Sequelize.DataTypes).findAll();
        res.status(200).send(gatos);
    },

    async create(req, res) {
        const sequelize = new Sequelize('apigatos', 'root', '123456', {
            host: 'localhost',
            dialect: 'mysql',
        }); 
        console.log(sequelize);
        console.log(req.body);
        await Gatos(sequelize, Sequelize.DataTypes).create({
            nome_gato: req.body.nome_gato,
            informacao : req.body.informacao,
            temperamento: req.body.temperamento,
            origem: req.body.origem,
        });
        res.status(200).send({mensagem: 'Gato criado com sucesso'});
    }
};
 