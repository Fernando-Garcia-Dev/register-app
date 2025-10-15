import express from 'express';

const PORT = process.env.PORT ?? 3000;
const path = process.cwd();
const app = express();
app.use(express.static(`${path}/public`));
app.use(express.json());

app.post('/register', (req, resp)=>{
    const {usuario, email, pass, confirmPass} = req.body;
    resp.send(`Datos recibidos: 
        Usuario: ${usuario}, 
        email: ${email},
        contraseña: ${pass}`);
});

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});