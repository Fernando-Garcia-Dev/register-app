import express from 'express';

const PORT = process.env.PORT ?? 3000;
const path = process.cwd();
const app = express();
app.use(express.static(`${path}/public`));

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});