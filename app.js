const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const request = require('request');


const hostname = 'https://api.thecatapi.com/';
const path = '/v1/breeds';
console.log(hostname + path)

request(`${hostname}${path}`, (err, res, body) => {
    console.log(body);
});

const gatosRoutes = require("./api/routes/gatos");

app.listen(7000, () => {
    console.log(`Express started at http://localhost:7000`)

})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/gatos', gatosRoutes);