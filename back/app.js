require('dotenv').config();

// Configuracion del servidor web
const express = require('express');
const cors = require('cors'); // Habilitar la conexion desde cualquier fuente
// Error: Cross Site Origin

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Carga de archivos
app.use(express.static("uploads"));

// Conexion a MongoDB
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URI)
    .then(() => console.log("Conectado a la base de datos"))
    .catch((err) => console.error(err));


// Definir rutas
app.use("/api", require("./routes/routes"));

// Iniciar servidor
const port = process.env.PORT;
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))

