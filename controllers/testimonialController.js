import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
	//validar
	const { nombre, correo, mensaje } = req.body;

	const errores = [];

	if (nombre.trim() === "") {
		errores.push({ mensaje: "El nombre está vacío" });
	}
	if (correo.trim() === "") {
		errores.push({ mensaje: "El correo está vacío" });
	}
	if (mensaje.trim() === "") {
		errores.push({ mensaje: "El mensaje está vacío" });
	}

	if (errores.length > 0) {
		//Consultar testimoniales existentes
		const testimoniales = await Testimonial.findAll();

		//Mostrar la vista con erroes
		res.render("testimoniales", {
			pagina: "Testimoniales",
			errores,
			nombre,
			correo,
			mensaje,
			testimoniales,
		});
	} else {
		//almacenar en BD
		try {
			await Testimonial.create({
				nombre,
				correo,
				mensaje,
			});

			res.redirect("/testimoniales");
		} catch (error) {
			console.log("Error en Testimonial Controller", error);
		}
	}
	// console.log(req.body);
	// console.log(errores);
};

export { guardarTestimonial };
