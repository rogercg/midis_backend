const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Importar rutas
const usersRoute = require('./routes/users');

// Usar rutas
app.use('/api/users', usersRoute);

// Ruta de inicio
app.get('/', (req, res) => {
    res.send('Servidor corriendo');
});

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/midis', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Conectado a MongoDB');
});

// Iniciar el servidor en el puerto proporcionado por Heroku
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
