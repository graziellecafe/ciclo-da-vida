"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CicloDaVida_1 = require("./src/CicloDaVida");
const main = (0, express_1.default)();
main.get('/main', (req, res) => {
    CicloDaVida_1.cicloDaVida;
    res.status(200).send('Programa Ciclo da Vida foi iniciado.');
});
main.listen(5000, () => {
    console.log('Main is running at http://localhost:5000/main');
});
//# sourceMappingURL=main.js.map