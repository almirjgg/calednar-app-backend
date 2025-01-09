import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import apiRouter from './routes/index.js';
import { dbConection } from './db/config.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

// Define __dirname manualmente
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());

app.use(express.static('public'));

app.use(express.json());

//base de datos
dbConection();
//Rutas

app.use('/api', apiRouter);
app.use('*', (_req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
console.log(process.env.PORT);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
