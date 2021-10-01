import express from "express";
import { cicloDaVida } from "./src/CicloDaVida";

const main = express();
main.get('/main', (req: any, res:any) => { 
    cicloDaVida;   
    res.status(200).send('Programa Ciclo da Vida foi iniciado.');
});

main.listen(5000, () => {
    console.log('Main is running at http://localhost:5000/main');
});

