const express = require('express');
const mongoose = require ('mongoose');
require("dotenv").config();
const  userRoutes= require("./routes/user");
const  carRoutes= require("./routes/car");
const  rentRoutes= require("./routes/rent");


const app = express();
const port = process.env.PORT || 3500;

//middleware
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', carRoutes);
app.use('/api', rentRoutes);


app.get('/',(req,res)=>{
  res.send('Bienvenido a mi api');
});

//mongodb conexion

mongoose.
connect(process.env.MONGODB_URI)
.then(()=> console.log("Conectado a MongoDB Atlas"))
.catch((error) =>console.error(error));


app.listen(port, ()=> console.log('El servidor esta activo', port));