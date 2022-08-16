const tenisService = require('../SERVICES/tenisrun.service');
const mongoose = require('mongoose');

const findAlltenisRunController = async (req, res) => {
  const tenisrun = await tenisService.findAlltenisRunService();
  res.send(tenisrun);
};

const findByIdtenisRunController = async (req, res) => {
  const idPar = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idPar)) {
    return res.status(400).send({ message: 'Id não existe!' });
  }

  const escolhaTenis = await tenisService.findByIdtenisRunService(idPar);

  if (!escolhaTenis) {
    return res.status(400).send({ message: 'Tenis não existe!' });
  }
  res.send(escolhaTenis);
};

const createtenisRunController = async (req, res) => {
  const tenisCreated = req.body;

  if (
    !tenisCreated ||
    !tenisCreated.Marca ||
    !tenisCreated.Modelo ||
    !tenisCreated.Lançamento ||
    !tenisCreated.Categoria ||
    !tenisCreated.Indicacao ||
    !tenisCreated.Pisada ||
    !tenisCreated.Drop ||
    !tenisCreated.Peso ||
    !tenisCreated.Amortecimento
  ) {
    return res.status(400).send({ message: 'Tenis não cadastrado!' });
  }

  const newTenis = await tenisService.createtenisRunService(tenisCreated);
  res.status(201).send(newTenis);
};

const updatetenisRunController = async (req, res) => {
  const idPar = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idPar)) {
    return res.status(400).send({ message: 'Id não existe!' });
  }

  const tenisEd = req.boby;

  if (
    !tenisEd ||
    !tenisEd.Marca ||
    !tenisEd.Modelo ||
    !tenisEd.Lançamento ||
    !tenisEd.Categoria ||
    !tenisEd.Indicacao ||
    !tenisEd.Pisada ||
    !tenisEd.Drop ||
    !tenisEd.Peso ||
    !tenisEd.Amortecimento
  ) {
    return res
      .status(400)
      .send({ message: 'Todos os campos devem estar preenchidos!' });
  }

  const upTenis = await tenisService.updatetenisRunService(idPar, tenisEd);
  res.send(upTenis);
};

const deletetenisRunController = async (req, res) => {
  const idPar = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idPar)) {
    return res.status(400).send({ message: 'Id não existe!' });
  }

  await tenisService.deletetenisRunService(idPar);
  res.send({ message: 'Item deletado com sucesso!' });
};

module.exports = {
  findAlltenisRunController,
  findByIdtenisRunController,
  createtenisRunController,
  updatetenisRunController,
  deletetenisRunController,
};
