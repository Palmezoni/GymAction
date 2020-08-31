namespace GymAction.RegistroAula {
    export interface RegistroAulaForm {
        CodPlano: Serenity.LookupEditor;
        CodAula: Serenity.LookupEditor;
        CodCliente: Serenity.LookupEditor;
        DatAula: Serenity.DateEditor;
    }

    export class RegistroAulaForm extends Serenity.PrefixedContext {
        static formKey = 'RegistroAula.RegistroAula';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RegistroAulaForm.init)  {
                RegistroAulaForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;

                Q.initFormType(RegistroAulaForm, [
                    'CodPlano', w0,
                    'CodAula', w0,
                    'CodCliente', w0,
                    'DatAula', w1
                ]);
            }
        }
    }
}
