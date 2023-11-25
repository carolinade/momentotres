const express= require("express");
const Car = require("../models/car");


const routercar = express.Router();


//create car
routercar.post('/cars', async (req, res) => {
  const { platenumber, brand, state } = req.body;

  // Verificar si ya existe un carro con el mismo platenumber
  const existingCar = await Car.findOne({ platenumber });

  if (existingCar) {
      return res.status(400).json({ message: 'Ya existe un carro con este número de placa.' });
  }

  // Crear un nuevo carro
  const newCar = new Car({ platenumber, brand, state });

  // Guardar el nuevo carro
  try {
      const savedCar = await newCar.save();
      res.json(savedCar);
  } catch (error) {
      res.status(500).json({ message: 'Error al guardar el carro.' });
  }
});

module.exports = routercar;
