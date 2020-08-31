namespace GymAction.Fisioterapeuta {
    export interface FisioterapeutaForm {
        DesNome: Serenity.StringEditor;
        IdfAtivo: Serenity.BooleanEditor;
    }

    export class FisioterapeutaForm extends Serenity.PrefixedContext {
        static formKey = 'Fisioterapeuta.Fisioterapeuta';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FisioterapeutaForm.init)  {
                FisioterapeutaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(FisioterapeutaForm, [
                    'DesNome', w0,
                    'IdfAtivo', w1
                ]);
            }
        }
    }
}
