// const express = require("express");
import express from "express";
import db from "./config/db.js";
import router from "./routes/index.js";
import dotenv from "dotenv/config";

// dotenv.config();
// console.log(process.env.DB_HOST);

const app = express();

//conectar DB
db.authenticate()
	.then(() => console.log("Conectado a DB"))
	.catch((error) => console.log("Es un error DB", error));

//Definir el PORT
const port = process.env.PORT || 4000;

//Hablitar PUG
app.set("view engine", "pug");

//Crear propio Middleware
//Obtener el año actual
app.use((req, res, next) => {
	const year = new Date();
	res.locals.actualYear = year.getFullYear();

	res.locals.nombreSitio = "Agencia de Viajes";

	next(); //va hacia el siguiente middleware
	//return next();  //obligar a que pase con un return
});

//Agregar Body parse para leer datos del formulario
app.use(express.urlencoded({ extended: true }));

//Definir la carpeta publica
app.use(express.static("public"));

//Agregar Router
app.use("/", router);

app.listen(port, () => {
	console.log("Conectado al Puerto");
});
