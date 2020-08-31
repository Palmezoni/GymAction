namespace GymAction.Pagamento {
    export interface PagamentoRow {
        CodPagamento?: number;
        CodPlano?: number;
        CodAula?: number;
        CodCliente?: number;
        DatVencimento?: string;
        DatPagamento?: string;
        VlrPago?: number;
        CodPlanoDesNome?: string;
        CodPlanoIdfTipo?: string;
        CodPlanoIdfAivo?: boolean;
        CodAulaDesAula?: string;
        CodAulaIdfTipoAtividade?: boolean;
        CodAulaIdfAtivo?: boolean;
        CodClienteCodBiometria?: number;
        CodClienteDesNome?: string;
        CodClienteDesRg?: string;
        CodClienteDesCpf?: string;
        CodClienteIdfAdimplente?: boolean;
        CodClienteIdfAtivo?: boolean;
        CodClienteDesEndereco?: string;
    }

    export namespace PagamentoRow {
        export const idProperty = 'CodPagamento';
        export const localTextPrefix = 'Pagamento.Pagamento';
        export const deletePermission = 'Pagamento:General';
        export const insertPermission = 'Pagamento:General';
        export const readPermission = 'Pagamento:General';
        export const updatePermission = 'Pagamento:General';

        export declare const enum Fields {
            CodPagamento = "CodPagamento",
            CodPlano = "CodPlano",
            CodAula = "CodAula",
            CodCliente = "CodCliente",
            DatVencimento = "DatVencimento",
            DatPagamento = "DatPagamento",
            VlrPago = "VlrPago",
            CodPlanoDesNome = "CodPlanoDesNome",
            CodPlanoIdfTipo = "CodPlanoIdfTipo",
            CodPlanoIdfAivo = "CodPlanoIdfAivo",
            CodAulaDesAula = "CodAulaDesAula",
            CodAulaIdfTipoAtividade = "CodAulaIdfTipoAtividade",
            CodAulaIdfAtivo = "CodAulaIdfAtivo",
            CodClienteCodBiometria = "CodClienteCodBiometria",
            CodClienteDesNome = "CodClienteDesNome",
            CodClienteDesRg = "CodClienteDesRg",
            CodClienteDesCpf = "CodClienteDesCpf",
            CodClienteIdfAdimplente = "CodClienteIdfAdimplente",
            CodClienteIdfAtivo = "CodClienteIdfAtivo",
            CodClienteDesEndereco = "CodClienteDesEndereco"
        }
    }
}
