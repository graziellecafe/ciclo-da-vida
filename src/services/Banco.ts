import { Extrato } from "../entities/Extrato";
import { DadosBancarios } from "../entities/DadosBancarios";
import { TipoDeConta } from "../enums/TipoDeConta";
import { ContaPessoaFisica, ContaJuridica } from "./ContaBancaria";
import { Pessoa } from "../entities/Pessoa";

export class Banco {
    Nome: string;
    // Parâmetros

    // Construtor 
    constructor (nome: string, init?: Partial<ContaPessoaFisica>){
        Object.assign(this,init);
        this.Nome = nome; 
    }

    // Métodos
    public ObterNumeroAgencia(banco: Banco): number{
        // numero agência: pode ser um número repetido, já que a agência pode ser a mesma;
        return
    }

    public ObterNumeroConta(banco: Banco): number{
        // numero conta: precisa ser um número diferente, número da conta não pode repetir
        return
    }

    public static CriarContaBancaria(banco, nome, cpf, numeroAgencia, numeroConta, tipoDeConta, senhaDaConta, saldoDaConta): DadosBancarios {
        numeroAgencia = banco.ObterNumeroAgencia();
        // numeroConta = ;
        return
    }

    public SacarDinheiro(): void {

    }

    public DepositarDinheiro(): void {

    }

    public ExtratoBancario(): Extrato {
        return 
    }
}