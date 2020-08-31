namespace GymAction.AulaInstrutor {
    export interface AulaInstrutorRow {
        CodRegistro?: number;
        CodAula?: number;
        CodInstrutor?: number;
        HorInicio?: string;
        HorFim?: string;
        IdfSegunda?: boolean;
        IdfTerca?: boolean;
        IdfQuarta?: boolean;
        IdfQuinta?: boolean;
        IdfSexta?: boolean;
        IdfSabado?: boolean;
        IdfDomingo?: boolean;
        DesSala?: string;
        CodAulaDesAula?: string;
        CodAulaIdfTipoAtividade?: boolean;
        CodAulaIdfAtivo?: boolean;
        CodInstrutorDesNome?: string;
        CodInstrutorDesRg?: string;
        CodInstrutorDesCpf?: string;
        CodInstrutorIdfTipoAtividade?: boolean;
        CodInstrutorIdfAtivo?: boolean;
    }

    export namespace AulaInstrutorRow {
        export const idProperty = 'CodRegistro';
        export const nameProperty = 'CodAulaDesAula';
        export const localTextPrefix = 'AulaInstrutor.AulaInstrutor';
        export const deletePermission = 'AulaInstrutor:General';
        export const insertPermission = 'AulaInstrutor:General';
        export const readPermission = 'AulaInstrutor:General';
        export const updatePermission = 'AulaInstrutor:General';

        export declare const enum Fields {
            CodRegistro = "CodRegistro",
            CodAula = "CodAula",
            CodInstrutor = "CodInstrutor",
            HorInicio = "HorInicio",
            HorFim = "HorFim",
            IdfSegunda = "IdfSegunda",
            IdfTerca = "IdfTerca",
            IdfQuarta = "IdfQuarta",
            IdfQuinta = "IdfQuinta",
            IdfSexta = "IdfSexta",
            IdfSabado = "IdfSabado",
            IdfDomingo = "IdfDomingo",
            DesSala = "DesSala",
            CodAulaDesAula = "CodAulaDesAula",
            CodAulaIdfTipoAtividade = "CodAulaIdfTipoAtividade",
            CodAulaIdfAtivo = "CodAulaIdfAtivo",
            CodInstrutorDesNome = "CodInstrutorDesNome",
            CodInstrutorDesRg = "CodInstrutorDesRg",
            CodInstrutorDesCpf = "CodInstrutorDesCpf",
            CodInstrutorIdfTipoAtividade = "CodInstrutorIdfTipoAtividade",
            CodInstrutorIdfAtivo = "CodInstrutorIdfAtivo"
        }
    }
}
