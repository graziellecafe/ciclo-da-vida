class ContaBancaria {
    public Agencia: string;
    public NumeroConta: string;
    public NomeBanco: string;
    
    constructor(agencia: string, numeroConta: string, nomeBanco: string){
        this.Agencia = agencia; 
        this.NumeroConta = numeroConta; 
        this.NomeBanco = nomeBanco;
    }
}

class ContaPessoaFisica extends ContaBancaria {
    public Cpf: string; 

    constructor(cpf: string, agencia: string, numeroConta: string, nomeBanco: string){
        super(agencia, numeroConta, nomeBanco);
        this.Cpf = cpf;
    }
}

class ContaJuridica extends ContaBancaria { 
    public Cnpf: string;

    constructor (cnpj: string, agencia: string, numeroConta: string, nomeBanco: string){
        super(agencia, numeroConta, nomeBanco); 
        this.Cnpf = cnpj;
    }
}

class Program {
    public Main() {
        var contaPessoaFisica = new ContaPessoaFisica('154.846.487-87', '1308', '00089674-52', 'Caixa Econômica Federal');
        console.log({contaPessoaFisica});
    }
}

new Program().Main();