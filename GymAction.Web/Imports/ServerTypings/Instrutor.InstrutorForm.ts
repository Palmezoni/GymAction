namespace GymAction.Instrutor {
    export interface InstrutorForm {
        DesNome: Serenity.StringEditor;
        DesRg: Serenity.StringEditor;
        DesCpf: Serenity.StringEditor;
        IdfTipoAtividade: Serenity.EnumEditor;
        IdfAtivo: Serenity.BooleanEditor;
    }

    export class InstrutorForm extends Serenity.PrefixedContext {
        static formKey = 'Instrutor.Instrutor';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InstrutorForm.init)  {
                InstrutorForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(InstrutorForm, [
                    'DesNome', w0,
                    'DesRg', w0,
                    'DesCpf', w0,
                    'IdfTipoAtividade', w1,
                    'IdfAtivo', w2
                ]);
            }
        }
    }
}
