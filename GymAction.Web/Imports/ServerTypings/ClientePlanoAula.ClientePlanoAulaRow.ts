namespace GymAction.ClientePlanoAula {
    export interface ClientePlanoAulaRow {
        CodRegistro?: number;
        Plano?: number;
        Aula?: number;
        Cliente?: number;
        PlanoDesNome?: string;
        PlanoIdfTipo?: string;
        PlanoIdfAivo?: boolean;
        AulaDesAula?: string;
        AulaIdfTipoAtividade?: boolean;
        AulaIdfAtivo?: boolean;
        ClienteCodBiometria?: number;
        ClienteDesNome?: string;
        ClienteDesRg?: string;
        ClienteDesCpf?: string;
        ClienteIdfAdimplente?: boolean;
        ClienteIdfAtivo?: boolean;
        ClienteDesEndereco?: string;
    }

    export namespace ClientePlanoAulaRow {
        export const idProperty = 'CodRegistro';
        export const localTextPrefix = 'ClientePlanoAula.ClientePlanoAula';
        export const deletePermission = 'ClientePlanoAula:General';
        export const insertPermission = 'ClientePlanoAula:General';
        export const readPermission = 'ClientePlanoAula:General';
        export const updatePermission = 'ClientePlanoAula:General';

        export declare const enum Fields {
            CodRegistro = "CodRegistro",
            Plano = "Plano",
            Aula = "Aula",
            Cliente = "Cliente",
            PlanoDesNome = "PlanoDesNome",
            PlanoIdfTipo = "PlanoIdfTipo",
            PlanoIdfAivo = "PlanoIdfAivo",
            AulaDesAula = "AulaDesAula",
            AulaIdfTipoAtividade = "AulaIdfTipoAtividade",
            AulaIdfAtivo = "AulaIdfAtivo",
            ClienteCodBiometria = "ClienteCodBiometria",
            ClienteDesNome = "ClienteDesNome",
            ClienteDesRg = "ClienteDesRg",
            ClienteDesCpf = "ClienteDesCpf",
            ClienteIdfAdimplente = "ClienteIdfAdimplente",
            ClienteIdfAtivo = "ClienteIdfAtivo",
            ClienteDesEndereco = "ClienteDesEndereco"
        }
    }
}
