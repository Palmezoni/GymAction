namespace GymAction.Ferias {
    export interface FeriasForm {
        CodPlano: Serenity.LookupEditor;
        CodAula: Serenity.LookupEditor;
        CodCliente: Serenity.LookupEditor;
        DatInicio: Serenity.DateEditor;
        DatFim: Serenity.DateEditor;
    }

    export class FeriasForm extends Serenity.PrefixedContext {
        static formKey = 'Ferias.Ferias';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FeriasForm.init)  {
                FeriasForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;

                Q.initFormType(FeriasForm, [
                    'CodPlano', w0,
                    'CodAula', w0,
                    'CodCliente', w0,
                    'DatInicio', w1,
                    'DatFim', w1
                ]);
            }
        }
    }
}
