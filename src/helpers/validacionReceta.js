import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionReceta = [
  check("nombreReceta")
    .notEmpty()
    .withMessage("El nombre de la receta es un dato obligatorio")
    .isLength({ min: 4, max: 50 })
    .withMessage("El nombre de la receta debe tener entre 4 y 50 caracteres"),
  check("imagen")
    .notEmpty()
    .withMessage("La URL de la imagen es un dato obligatorio")
    .matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/)
    .withMessage("Debe ingresar una URL válida con una imagen en formato (jpg | jpeg | gif | png)"),
  check("descripcion")
    .notEmpty()
    .withMessage("La descripción es un dato obligatorio")
    .isLength({ min: 10, max: 200 })
    .withMessage("La descripción debe tener entre 10 y 200 caracteres"),
  check("receta")
    .notEmpty()
    .withMessage("La receta es un dato obligatorio")
    .isLength({ min: 30, max: 200 })
    .withMessage("La receta debe tener entre 30 y 200 caracteres"),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionReceta;
