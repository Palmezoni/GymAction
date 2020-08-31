namespace GymAction.RegistroAula {
    export interface RegistroAulaRow {
        CodRegistro?: number;
        CodPlano?: number;
        CodAula?: number;
        CodCliente?: number;
        DatAula?: string;
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

    export namespace RegistroAulaRow {
        export const idProperty = 'CodRegistro';
        export const localTextPrefix = 'RegistroAula.RegistroAula';
        export const deletePermission = 'RegistroAula:General';
        export const insertPermission = 'RegistroAula:General';
        export const readPermission = 'RegistroAula:General';
        export const updatePermission = 'RegistroAula:General';

        export declare const enum Fields {
            CodRegistro = "CodRegistro",
            CodPlano = "CodPlano",
            CodAula = "CodAula",
            CodCliente = "CodCliente",
            DatAula = "DatAula",
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
