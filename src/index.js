import express from 'express';
import apiRouter from './routes/index.js';
import { dbConection } from './db/config.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static('public'));

app.use(express.json());

//base de datos
dbConection();
//Rutas

//TODO: auth crear,login, renew
app.use('/api', apiRouter);
//TODO: CRUD de eventos

console.log(process.env.PORT);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
