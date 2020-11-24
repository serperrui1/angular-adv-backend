require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

//crear el servidor de express

const app = express();

//configurar cors
app.use(cors());

//Base de datos
dbConnection();

//Rutas

app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola mundo'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});


//zrSojcapcle2ByV1