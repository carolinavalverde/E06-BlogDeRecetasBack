import mongoose from "mongoose";

const { Schema } = mongoose;

const recetaSchema = new Schema({
  nombreReceta: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 50,
    unique: true,
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (data) => {
        const pattern = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/;
        return pattern.test(data);
      },
      message:
        "Debe ingresar una URL válida con una imagen en formato (jpg | jpeg | gif | png)",
    },
  },
  descripcion: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 200,
  },
  ingredientes: {
    type: [String],
    required: true,
  },
  recetaTexto: {
    type: String,
    required: true,
    minLength: 30,
    maxLength: 200,
  },
});

const Receta = mongoose.model("Receta", recetaSchema);

export default Receta;
