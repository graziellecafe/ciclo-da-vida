var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(agencia, numeroConta, nomeBanco) {
        this.Agencia = agencia;
        this.NumeroConta = numeroConta;
        this.NomeBanco = nomeBanco;
    }
    return ContaBancaria;
}());
var ContaPessoaFisica = /** @class */ (function (_super) {
    __extends(ContaPessoaFisica, _super);
    function ContaPessoaFisica(cpf, agencia, numeroConta, nomeBanco) {
        var _this = _super.call(this, agencia, numeroConta, nomeBanco) || this;
        _this.Cpf = cpf;
        return _this;
    }
    return ContaPessoaFisica;
}(ContaBancaria));
var ContaJuridica = /** @class */ (function (_super) {
    __extends(ContaJuridica, _super);
    function ContaJuridica(cnpj, agencia, numeroConta, nomeBanco) {
        var _this = _super.call(this, agencia, numeroConta, nomeBanco) || this;
        _this.Cnpf = cnpj;
        return _this;
    }
    return ContaJuridica;
}(ContaBancaria));
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.prototype.Main = function () {
        var contaPessoaFisica = new ContaPessoaFisica('154.846.487-87', '1308', '00089674-52', 'Caixa Econômica Federal');
        console.log({ contaPessoaFisica: contaPessoaFisica });
    };
    return Program;
}());
new Program().Main();
