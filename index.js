const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./src/routes/userRoutes'); // Importa las rutas de usuario
const app = express();

mongoose.connect('mongodb+srv://rogercg:BggXtcVs50JJElwH@glassclock.7brslve.mongodb.net/midis', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB', err));

app.use(express.json());
app.use('/api/users', userRoutes); // Monta las rutas de usuario en la ruta base

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
