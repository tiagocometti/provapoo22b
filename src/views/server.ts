import express from 'express';
import UsuarioRoutes from './routes/UsuarioRoutes'; 
import LeilaoRoutes from './routes/LeilaoRoutes';   
import LanceRoutes from './routes/LanceRoutes';     
import path from 'path';

const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.use(UsuarioRoutes);  
app.use(LeilaoRoutes);   
app.use(LanceRoutes);    

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
