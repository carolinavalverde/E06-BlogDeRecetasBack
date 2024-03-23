import { Router } from "express";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  listarRecetas,
  obtenerReceta,
} from "../controllers/recetas.controllers.js";
import { check } from "express-validator";
import validacionReceta from "../helpers/validacionReceta.js";

const router = Router();

router
  .route("/recetas")
  .get(listarRecetas)
  .post([validacionReceta], crearReceta);
router
  .route("/recetas/:id")
  .get(obtenerReceta)
  .put(editarReceta)
  .delete(borrarReceta);

export default router;
