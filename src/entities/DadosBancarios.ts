import { TipoDeConta } from "../enums/TipoDeConta";

export class DadosBancarios {
    public NumeroDaAgencia: string;
    public NumeroDaConta: string;
    public Senha: string;
    public TipoDeConta: TipoDeConta;

    constructor(init?: Partial<DadosBancarios>) {
        Object.assign(this, init);
    }
}