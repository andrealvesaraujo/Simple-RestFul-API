const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

consign().include('routes').include('utils').into(app);

const port = process.env.PORT || 3000;

app.listen(3000, () => {

    console.log("Servidor rodando!");

});