const mongoose = require('mongoose');

const TenisRunSchema = new mongoose.Schema({
  Marca: {
    type: String,
    require: true,
  },
  Modelo: {
    type: String,
    require: true,
  },
  Lançamento: {
    type: String,
    require: true,
  },
  Categoria: {
    type: String,
    require: true,
  },
  Indicacao: {
    type: String,
    require: true,
  },
  Pisada: {
    type: String,
    require: true,
  },
  Drop: {
    type: String,
    require: true,
  },
  Peso: {
    type: String,
    require: true,
  },
  Amortecimento: {
    type: String,
    require: true,
  },
  Foto: {
    type: String,
    require: true,
  },
});

const TenisR = mongoose.model('tenis', TenisRunSchema);

module.exports = TenisR;
