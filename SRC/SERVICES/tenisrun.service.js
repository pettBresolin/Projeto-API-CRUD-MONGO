/*const tenisrun = [
  {
    id: 1,
    Marca: 'Nike',
    Modelo: 'Nike ZoomX VaporFly Next% – Com Placa de Carbono e Performance',
    Lançamento: '2019',
    Categoria: 'Competição',
    Indicacao: 'Modelo indicado para treinos de velocidade e provas',
    Pisada: 'Neutra',
    Drop: '8mm',
    Peso: '199g(41M) e 156g(36F)',
    Amortecimento: 'Muito Alto',
    Foto: '../../assets/images/nike-vaporfly-next-2.jpg',
  },
  {
    id: 2,
    Marca: 'Nike',
    Modelo: 'Nike React Infinity Run FlyKnit 2',
    Lançamento: '2021',
    Categoria: 'Dia a Dia',
    Indicacao: 'Modelo indicado para rodagens e treinos diários',
    Pisada: 'Neutra/Supinada',
    Drop: '9mm',
    Peso: '288g(41M) e 202g(35F)',
    Amortecimento: 'Alto',
    Foto: '../../assets/images/nike-infinity-run-flyknit-2.jpg',
  },
  {
    id: 3,
    Marca: 'Asics',
    Modelo: 'Asics Gel Kayano 28',
    Lançamento: '2021',
    Categoria: 'Amortecimento',
    Indicacao: 'Modelo indicado para treinos de velocidade e provas',
    Pisada: 'Pronada',
    Drop: '10 mm (M) e 13mm (F)',
    Peso: '315g(40M) e 245g(37F)',
    Amortecimento: 'Muito Alto',
    Foto: '../../assets/images/asics-gel-kayano-28.jpg',
  },
  {
    id: 4,
    Marca: 'Saucony',
    Modelo: 'Saucony Kinvara 12',
    Lançamento: '2019',
    Categoria: 'Dia a dia',
    Indicacao:
      'Tênis curinga, indicado para treinos diários, treinos de velocidade e provas',
    Pisada: 'Neutra',
    Drop: '4mm',
    Peso: '212g(40M) e 178g(36F)',
    Amortecimento: 'Bom',
    Foto: '../../assets/images/saucony-kinvara-12.jpg',
  },
  {
    id: 5,
    Marca: 'Asic',
    Modelo: 'Asics Novablast 2',
    Lançamento: '2020',
    Categoria: 'Amortecimento',
    Indicacao: 'Modelo  indicado para rodagens e treinos diários',
    Pisada: 'Neutra',
    Drop: '8mm',
    Peso: '275g(41M) e 222g(37F)',
    Amortecimento: 'Muito Alto',
    Foto: '../../assets/images/asics-novablast-2.jpg',
  },
  {
    id: 6,
    Marca: 'New Balance',
    Modelo: 'New Balance 1080v11',
    Lançamento: '2021',
    Categoria: 'Treinos',
    Indicacao: 'Indicado para treinos diários',
    Pisada: 'Neutra',
    Drop: '8mm',
    Peso: '278g(42M) e 216g(36F)',
    Amortecimento: 'Boa',
    Foto: '../../assets/images/new-balance-1080-v11.jpg',
  },
  {
    id: 7,
    Marca: 'Asics',
    Modelo: 'Asics Gel Nimbus 23',
    Lançamento: '2021',
    Categoria: 'Amortecimento',
    Indicacao: 'Modelo indicado para rodagens e treinos diários',
    Pisada: 'Neutra',
    Drop: '10mm(M) e 13mm(F)',
    Peso: '318g(41M) e 255g(35F)',
    Amortecimento: 'Muito Alto',
    Foto: '../../assets/images/asics-nimbus-23-masculino.jpg',
  },
  {
    id: 8,
    Marca: 'Brooks',
    Modelo: 'Brooks Glycerin 19',
    Lançamento: '2020',
    Categoria: 'Amortecimento',
    Indicacao: 'Modelo  indicado para rodagens e treinos diários',
    Pisada: 'Neutra',
    Drop: '10mm',
    Peso: '285g(41M) e 241g(37F)',
    Amortecimento: 'Muito Alto',
    Foto: '../../assets/images/brooks-glycerin-19',
  },
  {
    id: 9,
    Marca: 'Nike',
    Modelo: 'Nike Air Zoom Pegasus 38',
    Lançamento: '2021',
    Categoria: 'Dia a dia',
    Indicacao:
      'Modelo indicado para treinos diários, treinos de velocidade e provas',
    Pisada: 'Neutra/Supinada',
    Drop: '10mm',
    Peso: '294g(41M) e 231g(35F)',
    Amortecimento: 'Alto',
    Foto: '../../assets/images/nike-pegasus-38-e-bom',
  },
  {
    id: 10,
    Marca: 'Olympikus',
    Modelo: 'Olympikus Voa',
    Lançamento: '2022',
    Categoria: 'Corrida leve e Caminhada',
    Indicacao:
      'Tênis indicado pra caminhadas, corridas leves e treinos de academia',
    Pisada: 'Neutra',
    Drop: '8mm',
    Peso: '272g(40M) e 208g(35F)',
    Amortecimento: 'Baixo',
    Foto: '../../assets/images/olympikus Voa',
  },
]; */

const tenisRun = require('../models/tenisRun');

const findAlltenisRunService = async () => {
  const tenisrun = await tenisRun.find();
  return tenisrun;
};

const findByIdtenisRunService = async (idPar) => {
  const tenisrun = await tenisRun.findById(idPar);
  return tenisrun;
};

const createtenisRunService = async (newTenis) => {
  const tenisCreated = await tenisRun.create(newTenis);
  return tenisCreated;
};

const updatetenisRunService = async (idPar, tenisEd) => {
  const tenisUp = await tenisRun.findByIdAndUpdate(idPar, tenisEd);
  return tenisUp;
};

const deletetenisRunService = async (idPar) => {
  return await tenisRun.findByIdAndDelete(idPar);
};

module.exports = {
  findAlltenisRunService,
  findByIdtenisRunService,
  createtenisRunService,
  updatetenisRunService,
  deletetenisRunService,
};
