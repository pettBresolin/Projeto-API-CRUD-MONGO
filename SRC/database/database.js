const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/TenisRun-DB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb CONNECT!'))
    .catch((ERROR) =>
      console.log(`Erro ao conectar com Bando de dados MongoDB, erro:${ERROR}`),
    );
};

module.exports = connectToDatabase;
