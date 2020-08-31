namespace GymAction.Aula {
    export interface AulaRow {
        CodAula?: number;
        DesAula?: string;
        IdfTipoAtividade?: number;
        IdfAtivo?: boolean;
    }

    export namespace AulaRow {
        export const idProperty = 'CodAula';
        export const nameProperty = 'DesAula';
        export const localTextPrefix = 'Aula.Aula';
        export const lookupKey = 'Aula.Aula';

        export function getLookup(): Q.Lookup<AulaRow> {
            return Q.getLookup<AulaRow>('Aula.Aula');
        }
        export const deletePermission = 'Aula:General';
        export const insertPermission = 'Aula:General';
        export const readPermission = 'Aula:General';
        export const updatePermission = 'Aula:General';

        export declare const enum Fields {
            CodAula = "CodAula",
            DesAula = "DesAula",
            IdfTipoAtividade = "IdfTipoAtividade",
            IdfAtivo = "IdfAtivo"
        }
    }
}
