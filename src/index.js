import express from 'express';
import apiRouter from './routes/index.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static('public'));

//Rutas

//TODO: auth crear,login, renew
app.use('/api', apiRouter);
//TODO: CRUD de eventos

console.log(process.env.PORT);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
