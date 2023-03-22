const express = require('express')
const router = require('./routes/routes.js') 
const mongoose = require('./databases.js') 
const cors = require('cors') 
require("dotenv").config();

// Crear la app

const app = express()

//Middlewares
app.use(express.json())
app.use (cors())


//Routing

app.use('/', router)







// Definir el puerto y arrancar el proyecto
const port = 3000

app.listen (port, ()=>{
    console.log(`El servidor esta conectado al puerto ${port}`);
})