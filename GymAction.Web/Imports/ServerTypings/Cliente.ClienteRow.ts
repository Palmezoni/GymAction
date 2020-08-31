namespace GymAction.Cliente {
    export interface ClienteRow {
        CodCliente?: number;
        CodBiometria?: number;
        DesNome?: string;
        DesRg?: string;
        DesCpf?: string;
        IdfAdimplente?: boolean;
        IdfAtivo?: boolean;
        DesEndereco?: string;
    }

    export namespace ClienteRow {
        export const idProperty = 'CodCliente';
        export const nameProperty = 'DesNome';
        export const localTextPrefix = 'Cliente.Cliente';
        export const lookupKey = 'Cliente.Cliente';

        export function getLookup(): Q.Lookup<ClienteRow> {
            return Q.getLookup<ClienteRow>('Cliente.Cliente');
        }
        export const deletePermission = 'Cliente:General';
        export const insertPermission = 'Cliente:General';
        export const readPermission = 'Cliente:General';
        export const updatePermission = 'Cliente:General';

        export declare const enum Fields {
            CodCliente = "CodCliente",
            CodBiometria = "CodBiometria",
            DesNome = "DesNome",
            DesRg = "DesRg",
            DesCpf = "DesCpf",
            IdfAdimplente = "IdfAdimplente",
            IdfAtivo = "IdfAtivo",
            DesEndereco = "DesEndereco"
        }
    }
}
