const express= require("express");
const Rent = require("../models/rent");
const Car =require("../models/car");
const User =require("../models/user");


const routerent = express.Router();

routerent.post('/rents', async (req, res) => {
  try {
      const car = await Car.findOne({ platenumber: req.body.platenumber });

      if (car) {
          if (car.state === 'activo') {
              const user = await User.findOne({ username: req.body.username });

              if (user) {
                  const existingRent = await Rent.findOne({ rentnumber: req.body.rentnumber });

                  if (existingRent) {
                      res.status(400).json({ message: 'Número de renta ya existe, ingrese uno nuevo...', error: true });
                  } else {
                      // Crear un nuevo registro de renta
                      const rentn = new Rent(req.body);
                      await rentn.save();
                      res.status(200).json({ message: 'Renta agregada correctamente', error: false });
                  }
              } else {
                  res.status(404).json({ message: 'El nombre de usuario no existe en la tabla de usuarios', error: true });
              }
          } else {
              res.status(400).json({ message: 'El estado del automóvil no está disponible', error: true });
          }
      } else {
          res.status(404).json({ message: 'El número de placa no existe en la tabla de autos', error: true });
      }
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error interno del servidor', error: true });
  }
});

module.exports = routerent;