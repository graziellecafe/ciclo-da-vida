import { TipoDeConta } from "../enums/TipoDeConta";

export class Extrato {
    public SaldoDisponivel: number;
    public LimiteDeCredito: number; 
    public TipoDeConta: TipoDeConta;

    constructor(init?: Partial<Extrato>) {
        Object.assign(this,init);
    }
}

