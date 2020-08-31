namespace GymAction.Plano {
    export interface PlanoRow {
        CodPlano?: number;
        DesNome?: string;
        IdfTipo?: number;
        IdfAivo?: boolean;
    }

    export namespace PlanoRow {
        export const idProperty = 'CodPlano';
        export const nameProperty = 'DesNome';
        export const localTextPrefix = 'Plano.Plano';
        export const lookupKey = 'Plano.Plano';

        export function getLookup(): Q.Lookup<PlanoRow> {
            return Q.getLookup<PlanoRow>('Plano.Plano');
        }
        export const deletePermission = 'Plano:General';
        export const insertPermission = 'Plano:General';
        export const readPermission = 'Plano:General';
        export const updatePermission = 'Plano:General';

        export declare const enum Fields {
            CodPlano = "CodPlano",
            DesNome = "DesNome",
            IdfTipo = "IdfTipo",
            IdfAivo = "IdfAivo"
        }
    }
}
