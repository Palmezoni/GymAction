namespace GymAction.Ferias {
    export interface FeriasRow {
        CodFerias?: number;
        CodPlano?: number;
        CodAula?: number;
        CodCliente?: number;
        DatInicio?: string;
        DatFim?: string;
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

    export namespace FeriasRow {
        export const idProperty = 'CodFerias';
        export const localTextPrefix = 'Ferias.Ferias';
        export const deletePermission = 'Ferias:General';
        export const insertPermission = 'Ferias:General';
        export const readPermission = 'Ferias:General';
        export const updatePermission = 'Ferias:General';

        export declare const enum Fields {
            CodFerias = "CodFerias",
            CodPlano = "CodPlano",
            CodAula = "CodAula",
            CodCliente = "CodCliente",
            DatInicio = "DatInicio",
            DatFim = "DatFim",
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
