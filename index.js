const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors());

// Base de datos
dbConnection();

// Rutas
app.get('/', (req, res) => {
	res.status(200).json({
		ok: true,
		msg: 'Hola mundaaaa',
	});
});

app.listen(process.env.PORT, () => {
	console.log('Ejecutando en puerto ' + process.env.PORT);
});
