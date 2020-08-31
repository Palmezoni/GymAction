namespace GymAction.Plano {
    export interface PlanoForm {
        DesNome: Serenity.StringEditor;
        IdfTipo: Serenity.EnumEditor;
        IdfAivo: Serenity.BooleanEditor;
    }

    export class PlanoForm extends Serenity.PrefixedContext {
        static formKey = 'Plano.Plano';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PlanoForm.init)  {
                PlanoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(PlanoForm, [
                    'DesNome', w0,
                    'IdfTipo', w1,
                    'IdfAivo', w2
                ]);
            }
        }
    }
}
