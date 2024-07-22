const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const port = 4000;

require("dotenv").config();

app.use(cors({
    origin: 'http://localhost:5173',
    optionsSuccessSatatus: 200
}));

app.use(bodyParser.json());

async function main(){
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("Conectado a la Base de Mongo!");
}
main().catch(console.error);


app.use("/api/subirProd", require("./Rutas/productos"));


app.get("/", (req, res)=> {
    res.send('Hello word!');
});

app.listen(port, ()=>{
    console.log("Escuchando puerto: ", port );
});