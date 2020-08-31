namespace GymAction.PlanoAula {
    export interface PlanoAulaRow {
        CodRegistro?: number;
        CodPlano?: number;
        CodAula?: number;
        VlrAula?: number;
        CodPlanoDesNome?: string;
        CodPlanoIdfTipo?: string;
        CodPlanoIdfAivo?: boolean;
        CodAulaDesAula?: string;
        CodAulaIdfTipoAtividade?: boolean;
        CodAulaIdfAtivo?: boolean;
    }

    export namespace PlanoAulaRow {
        export const idProperty = 'CodRegistro';
        export const nameProperty = 'CodPlanoDesNome';
        export const localTextPrefix = 'PlanoAula.PlanoAula';
        export const deletePermission = 'PlanoAula:General';
        export const insertPermission = 'PlanoAula:General';
        export const readPermission = 'PlanoAula:General';
        export const updatePermission = 'PlanoAula:General';

        export declare const enum Fields {
            CodRegistro = "CodRegistro",
            CodPlano = "CodPlano",
            CodAula = "CodAula",
            VlrAula = "VlrAula",
            CodPlanoDesNome = "CodPlanoDesNome",
            CodPlanoIdfTipo = "CodPlanoIdfTipo",
            CodPlanoIdfAivo = "CodPlanoIdfAivo",
            CodAulaDesAula = "CodAulaDesAula",
            CodAulaIdfTipoAtividade = "CodAulaIdfTipoAtividade",
            CodAulaIdfAtivo = "CodAulaIdfAtivo"
        }
    }
}
