namespace GymAction.ClientePlanoAula {
    export interface ClientePlanoAulaForm {
        Plano: Serenity.LookupEditor;
        Aula: Serenity.LookupEditor;
        Cliente: Serenity.LookupEditor;
    }

    export class ClientePlanoAulaForm extends Serenity.PrefixedContext {
        static formKey = 'ClientePlanoAula.ClientePlanoAula';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClientePlanoAulaForm.init)  {
                ClientePlanoAulaForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(ClientePlanoAulaForm, [
                    'Plano', w0,
                    'Aula', w0,
                    'Cliente', w0
                ]);
            }
        }
    }
}
