// Importar cada camada de Serviço da pasta Services

import { PrismaClient } from '@prisma/client';
import UsuarioService from '../services/UsuarioServices';
import LeilaoService from '../services/LeilaoServices';
import LanceService from '../services/LanceServices';

const prisma = new PrismaClient();

async function main() {

  console.log(await UsuarioService.listUsuarios());


  console.log(await LeilaoService.listLeiloes());

  
  console.log(await LanceService.listLances());
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
