namespace GymAction.Fisioterapeuta {
    export interface FisioterapeutaRow {
        CodFisioterapeuta?: number;
        DesNome?: string;
        IdfAtivo?: boolean;
    }

    export namespace FisioterapeutaRow {
        export const idProperty = 'CodFisioterapeuta';
        export const nameProperty = 'DesNome';
        export const localTextPrefix = 'Fisioterapeuta.Fisioterapeuta';
        export const lookupKey = 'Fisioterapeuta.Fisioterapeuta';

        export function getLookup(): Q.Lookup<FisioterapeutaRow> {
            return Q.getLookup<FisioterapeutaRow>('Fisioterapeuta.Fisioterapeuta');
        }
        export const deletePermission = 'Fisioterapeuta:General';
        export const insertPermission = 'Fisioterapeuta:General';
        export const readPermission = 'Fisioterapeuta:General';
        export const updatePermission = 'Fisioterapeuta:General';

        export declare const enum Fields {
            CodFisioterapeuta = "CodFisioterapeuta",
            DesNome = "DesNome",
            IdfAtivo = "IdfAtivo"
        }
    }
}
