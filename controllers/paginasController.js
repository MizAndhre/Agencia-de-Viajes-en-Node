import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = async (req, res) => {
	//Consultar tres viajes del modelo Viaje
	const promiseDB = [];
	promiseDB.push(Viaje.findAll({ limit: 3 }));
	promiseDB.push(Testimonial.findAll({ limit: 3 }));

	try {
		// const viajes = await Viaje.findAll({ limit: 3 });
		// const testimoniales = await Testimonial.findAll({ limit: 3 });
		// Si son las dos await, se gasta mucho tiempo esperando a que ambas consultas se resuelvan => Se utiliza el Promis
		const resultado = await Promise.all(promiseDB);
		// tambien se podría hacer destructuring
		// const [viajes, testimoniales] = await Promise.all(promiseDB)
		res.render("inicio", {
			pagina: "Inicio",
			clase: "home",
			// viajes,
			// testimoniales,
			viajes: resultado[0],
			testimoniales: resultado[1],
		});
	} catch (error) {
		console.log("Error en Paginas Controller Inicio", error);
	}
};

const paginaNosotros = (req, res) => {
	res.render("nosotros", {
		pagina: "Nosotros",
	});
};

const paginaViajes = async (req, res) => {
	//Consultar DB
	const viajes = await Viaje.findAll();
	// console.log(viajes);

	res.render("viajes", {
		pagina: "Próximos Viajes",
		viajes,
	});
};

const paginaTestimoniales = async (req, res) => {
	try {
		const testimoniales = await Testimonial.findAll();
		res.render("testimoniales", {
			pagina: "Testimoniales",
			testimoniales,
		});
	} catch (error) {
		console.log("Error en Paginas Controlles Testimoniales", error);
	}
};

//Muestra viaje por el slug
const paginaDetalleViaje = async (req, res) => {
	const { slug } = req.params;

	try {
		const destino = await Viaje.findOne({ where: { slug } });
		// console.log(destino);

		res.render("destino", {
			pagina: "Próximos Viajes",
			destino,
		});
	} catch (error) {
		console.log("Error en Pagina Detalle Viaje", error);
	}
};

export { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje };
