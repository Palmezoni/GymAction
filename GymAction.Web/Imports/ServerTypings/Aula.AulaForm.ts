namespace GymAction.Aula {
    export interface AulaForm {
        DesAula: Serenity.StringEditor;
        IdfTipoAtividade: Serenity.EnumEditor;
        IdfAtivo: Serenity.BooleanEditor;
    }

    export class AulaForm extends Serenity.PrefixedContext {
        static formKey = 'Aula.Aula';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AulaForm.init)  {
                AulaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(AulaForm, [
                    'DesAula', w0,
                    'IdfTipoAtividade', w1,
                    'IdfAtivo', w2
                ]);
            }
        }
    }
}
