import express from "express";
import {
	paginaDetalleViaje,
	paginaInicio,
	paginaNosotros,
	paginaTestimoniales,
	paginaViajes,
} from "../controllers/paginasController.js";

import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);

router.get("/viajes/:slug", paginaDetalleViaje);

router.get("/testimoniales", paginaTestimoniales);
router.post("/testimoniales", guardarTestimonial);

export default router;


//req lo que enviamos != res lo que responde express
// res.send("Nosotros");

// ==== Para pasar a una vista ====
// const viajes = "Viaje ";
// res.render("nosotros", {
// 	viajes,
// });
