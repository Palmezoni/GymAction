namespace GymAction.Instrutor {
    export interface InstrutorRow {
        CodInstrutor?: number;
        DesNome?: string;
        DesRg?: string;
        DesCpf?: string;
        IdfTipoAtividade?: number;
        IdfAtivo?: boolean;
    }

    export namespace InstrutorRow {
        export const idProperty = 'CodInstrutor';
        export const nameProperty = 'DesNome';
        export const localTextPrefix = 'Instrutor.Instrutor';
        export const lookupKey = 'Instrutor.Instrutor';

        export function getLookup(): Q.Lookup<InstrutorRow> {
            return Q.getLookup<InstrutorRow>('Instrutor.Instrutor');
        }
        export const deletePermission = 'Instrutor:General';
        export const insertPermission = 'Instrutor:General';
        export const readPermission = 'Instrutor:General';
        export const updatePermission = 'Instrutor:General';

        export declare const enum Fields {
            CodInstrutor = "CodInstrutor",
            DesNome = "DesNome",
            DesRg = "DesRg",
            DesCpf = "DesCpf",
            IdfTipoAtividade = "IdfTipoAtividade",
            IdfAtivo = "IdfAtivo"
        }
    }
}
