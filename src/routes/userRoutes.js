const express = require('express');
const User = require('../models/user'); // Importa el modelo User
const multer = require('multer');
const router = express.Router();
const upload = multer();

router.post('/login', upload.none(), async (req, res) => {
  try {
    const { dni, start_date } = req.body;
    const user = await User.findOne({ dni, start_date }); // Forma 1
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/postular', upload.none(), async (req, res) => {
  try {
    const { dni, start_date } = req.body;
    const user = await User.findOne({ dni: dni, start_date: start_date }).lean(); // Usando lean() para obtener un objeto JavaScript plano
    
    console.log("Esto contiene user: " + user);
    console.log("");
    console.log("Esto contiene user.postular: " + user.postular);

    if (user.postular == true) {
      res.json({
        postular: user.postular,
        message: "Ya se postulo"
      
      });
    } else if (user.postular == false) {
      res.json({
        postular: user.postular,
        message: "Postulación exitosa"
      });
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/consultarSisfo', upload.none(), async (req, res) => {
  try {
    const { dni, start_date } = req.body;
    const user = await User.findOne({ dni: dni, start_date: start_date }).lean();
    if (user.consultar_sisfo == true) {
      res.json({
        consultar_sisfo: user.consultar_sisfo,
        message: "Sisfo encontrado"
      
      });
    } else {
      res.json(
        {
          consultar_sisfo: user.consultar_sisfo,
          message: "Sisfo no encontrado"
        }
      );
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/consultarAfiliacion', upload.none(), async (req, res) => {
  try {
    const { dni, start_date } = req.body;
    const user = await User.findOne({ dni: dni, start_date: start_date }).lean();
    if (user.consultar_afiliacion == true) {
      res.json({
        consultar_afiliacion: user.consultar_afiliacion,
        message: "Afiliacion encontrada"
      });
    } else {
      res.json({
        consultar_afiliacion: user.consultar_afiliacion,
        message: "Afiliacion no encontrada"
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router; // Exportando el router
