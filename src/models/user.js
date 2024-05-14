const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  dni: String,
  fecha: String,
  // Agrega otros campos necesarios para tu aplicación
});

const User = mongoose.model('User', userSchema);

module.exports = User; // Exportando el modelo User
