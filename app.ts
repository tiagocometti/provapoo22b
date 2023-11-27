import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;


app.get('/', (req: Request, res: Response) => {
  res.send('Bem-vindo ao servidor de leilões !');
});


app.get('/redirect', (req: Request, res: Response) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta 3000  `);
});
