//=======[ Settings, Imports & Data ]==========================================

var PORT    = 3000;

const cors = require('cors');

var express = require('express');
var app = express();
var pool = require('./mysql-connector');
const routerDispositivo = require('./routes/dispositivo')

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));
// to enable cors
app.use(cors(corsOptions));

app.use('/dispositivo', routerDispositivo)

//=======[ Main module code ]==================================================

app.get('/', function(req, res, next) {
    res.send({'mensaje': 'Hola DAM'}).status(200);
});

app.get('/devices', function (req, res) {
    const query = 'SELECT * FROM Dispositivos';

    // Realizamos la consulta a la base de datos
    pool.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener los dispositivos:', error);
            res.status(500).send({ error: 'Error al obtener los dispositivos' });
        } else {
            res.status(200).send(results);
        }
    });
});

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
