const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();
const gatosController = require('../controllers/gatos');

router.get('/', (req, res) => {
    gatosController.getAll(req, res);
    console.log(res.query);
}); 

router.post('/', (req, res) => {
    gatosController.create(req, res);
    console.log(res.body)
}); 
module.exports = router; 