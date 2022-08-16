const express = require('express');
const cors = require('cors');
const route = require('./SRC/ROUTES/tenisrun.route');
const connectToDatabase = require('./SRC/database/database');

const port = 3000;
const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/tenisrun', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log('Lista dos melhores tenis de corrida de 2022');
});
