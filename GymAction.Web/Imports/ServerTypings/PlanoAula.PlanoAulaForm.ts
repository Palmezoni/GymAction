namespace GymAction.PlanoAula {
    export interface PlanoAulaForm {
        CodPlano: Serenity.LookupEditor;
        CodAula: Serenity.LookupEditor;
        VlrAula: Serenity.DecimalEditor;
    }

    export class PlanoAulaForm extends Serenity.PrefixedContext {
        static formKey = 'PlanoAula.PlanoAula';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PlanoAulaForm.init)  {
                PlanoAulaForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(PlanoAulaForm, [
                    'CodPlano', w0,
                    'CodAula', w0,
                    'VlrAula', w1
                ]);
            }
        }
    }
}
