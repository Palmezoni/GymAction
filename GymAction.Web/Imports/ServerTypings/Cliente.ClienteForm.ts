namespace GymAction.Cliente {
    export interface ClienteForm {
        CodBiometria: Serenity.IntegerEditor;
        DesNome: Serenity.StringEditor;
        DesRg: Serenity.StringEditor;
        DesCpf: Serenity.StringEditor;
        IdfAdimplente: Serenity.BooleanEditor;
        IdfAtivo: Serenity.BooleanEditor;
        DesEndereco: Serenity.StringEditor;
    }

    export class ClienteForm extends Serenity.PrefixedContext {
        static formKey = 'Cliente.Cliente';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClienteForm.init)  {
                ClienteForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(ClienteForm, [
                    'CodBiometria', w0,
                    'DesNome', w1,
                    'DesRg', w1,
                    'DesCpf', w1,
                    'IdfAdimplente', w2,
                    'IdfAtivo', w2,
                    'DesEndereco', w1
                ]);
            }
        }
    }
}
