import { AcaoSocial } from "../services/AcaoSocial";
import { MundoCapitalista } from "../services/MundoCapitalista";
export declare class CicloDaVida {
    private emprestimoTotalAPagar;
    private valorDoEmprestimo;
    readonly AcaoSocial: AcaoSocial;
    readonly MundoCapitalista: MundoCapitalista;
    constructor(acaoSocial: AcaoSocial, mundoCapitalista: MundoCapitalista);
    Genesis(): void;
    private CicloDaPessoa;
    private FaseDeVidaAdulta;
    private ValidarFaseAdulta;
    private Trabalhar;
    private Mercado;
    private RealizaCompra;
    private ValidarPagamentoEmprestimo;
    private ValidarDiaDeDoacao;
}
declare const cicloDaVida: void;
export { cicloDaVida };
