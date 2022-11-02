import Sequelize from "sequelize";
import dotenv from "dotenv/config";

// console.log(process.env.DB_HOST);

//1- nombre db | nombre usuario | contraseña
// const db = new Sequelize("agencia-viajes", "root", "luzma3621", {
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
	// host: "127.0.0.1",
	host: process.env.DB_HOST,
	port: "3306",
	dialect: "mysql",
	define: {
		timestamps: false,
	},
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	operatorAliases: false,
});

export default db;
