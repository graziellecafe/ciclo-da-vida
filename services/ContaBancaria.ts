class ContaBancaria {
    public Agencia: string;
    public NumeroConta: string;
    public TipoDeConta: string;
    public Senha: string;
    public SaldoDaConta: number; 
    
    constructor(agencia: string, numeroConta: string, tipoDeConta: string, senha: string, saldoDaConta: number){
        this.Agencia = agencia; 
        this.NumeroConta = numeroConta; 
        this.TipoDeConta = tipoDeConta;
        this.Senha = senha; 
        this.SaldoDaConta = saldoDaConta; 
    }
}

class ContaPessoaFisica extends ContaBancaria {
    public Cpf: string; 

    constructor(cpf: string, agencia: string, numeroConta: string, tipoDeConta: string, senha: string, saldoDaConta: number){
        super(agencia, numeroConta, tipoDeConta, senha, saldoDaConta);
        this.Cpf = cpf;
    }
}

class ContaJuridica extends ContaBancaria { 
    public Cnpf: string;

    constructor (cnpj: string, agencia: string, numeroConta: string, tipoDeConta: string, senha: string, saldoDaConta: number){
        super(agencia, numeroConta, tipoDeConta, senha, saldoDaConta); 
        this.Cnpf = cnpj;
    }
}

// class Program {
//     public Main() {
//         var contaPessoaFisica = new ContaPessoaFisica('154.846.487-87', '1308', '00089674-52', 'Caixa Econômica Federal');
//         console.log({contaPessoaFisica});
//     }
// }

// new Program().Main();