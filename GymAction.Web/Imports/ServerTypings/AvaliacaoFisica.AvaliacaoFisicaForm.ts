namespace GymAction.AvaliacaoFisica {
    export interface AvaliacaoFisicaForm {
        CodCliente: Serenity.LookupEditor;
        CodFisioterapeuta: Serenity.LookupEditor;
        DesAnamnese: Serenity.StringEditor;
        DesExameDobras: Serenity.StringEditor;
        DesExameErgometrico: Serenity.StringEditor;
        DatAvaliacao: Serenity.DateEditor;
    }

    export class AvaliacaoFisicaForm extends Serenity.PrefixedContext {
        static formKey = 'AvaliacaoFisica.AvaliacaoFisica';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AvaliacaoFisicaForm.init)  {
                AvaliacaoFisicaForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(AvaliacaoFisicaForm, [
                    'CodCliente', w0,
                    'CodFisioterapeuta', w0,
                    'DesAnamnese', w1,
                    'DesExameDobras', w1,
                    'DesExameErgometrico', w1,
                    'DatAvaliacao', w2
                ]);
            }
        }
    }
}
