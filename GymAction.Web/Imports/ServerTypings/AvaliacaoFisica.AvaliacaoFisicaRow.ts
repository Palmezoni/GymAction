namespace GymAction.AvaliacaoFisica {
    export interface AvaliacaoFisicaRow {
        CodAvaliacaoFisica?: number;
        CodCliente?: number;
        CodFisioterapeuta?: number;
        DesAnamnese?: string;
        DesExameDobras?: string;
        DesExameErgometrico?: string;
        DatAvaliacao?: string;
        CodClienteCodBiometria?: number;
        CodClienteDesNome?: string;
        CodClienteDesRg?: string;
        CodClienteDesCpf?: string;
        CodClienteIdfAdimplente?: boolean;
        CodClienteIdfAtivo?: boolean;
        CodClienteDesEndereco?: string;
        CodFisioterapeutaDesNome?: string;
        CodFisioterapeutaIdfAtivo?: boolean;
    }

    export namespace AvaliacaoFisicaRow {
        export const idProperty = 'CodAvaliacaoFisica';
        export const nameProperty = 'DesAnamnese';
        export const localTextPrefix = 'AvaliacaoFisica.AvaliacaoFisica';
        export const deletePermission = 'AvaliacaoFisica:General';
        export const insertPermission = 'AvaliacaoFisica:General';
        export const readPermission = 'AvaliacaoFisica:General';
        export const updatePermission = 'AvaliacaoFisica:General';

        export declare const enum Fields {
            CodAvaliacaoFisica = "CodAvaliacaoFisica",
            CodCliente = "CodCliente",
            CodFisioterapeuta = "CodFisioterapeuta",
            DesAnamnese = "DesAnamnese",
            DesExameDobras = "DesExameDobras",
            DesExameErgometrico = "DesExameErgometrico",
            DatAvaliacao = "DatAvaliacao",
            CodClienteCodBiometria = "CodClienteCodBiometria",
            CodClienteDesNome = "CodClienteDesNome",
            CodClienteDesRg = "CodClienteDesRg",
            CodClienteDesCpf = "CodClienteDesCpf",
            CodClienteIdfAdimplente = "CodClienteIdfAdimplente",
            CodClienteIdfAtivo = "CodClienteIdfAtivo",
            CodClienteDesEndereco = "CodClienteDesEndereco",
            CodFisioterapeutaDesNome = "CodFisioterapeutaDesNome",
            CodFisioterapeutaIdfAtivo = "CodFisioterapeutaIdfAtivo"
        }
    }
}
