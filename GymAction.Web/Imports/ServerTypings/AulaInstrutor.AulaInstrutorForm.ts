namespace GymAction.AulaInstrutor {
    export interface AulaInstrutorForm {
        CodAula: Serenity.LookupEditor;
        CodInstrutor: Serenity.LookupEditor;
        HorInicio: Serenity.StringEditor;
        HorFim: Serenity.StringEditor;
        IdfSegunda: Serenity.BooleanEditor;
        IdfTerca: Serenity.BooleanEditor;
        IdfQuarta: Serenity.BooleanEditor;
        IdfQuinta: Serenity.BooleanEditor;
        IdfSexta: Serenity.BooleanEditor;
        IdfSabado: Serenity.BooleanEditor;
        IdfDomingo: Serenity.BooleanEditor;
        DesSala: Serenity.StringEditor;
    }

    export class AulaInstrutorForm extends Serenity.PrefixedContext {
        static formKey = 'AulaInstrutor.AulaInstrutor';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AulaInstrutorForm.init)  {
                AulaInstrutorForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(AulaInstrutorForm, [
                    'CodAula', w0,
                    'CodInstrutor', w0,
                    'HorInicio', w1,
                    'HorFim', w1,
                    'IdfSegunda', w2,
                    'IdfTerca', w2,
                    'IdfQuarta', w2,
                    'IdfQuinta', w2,
                    'IdfSexta', w2,
                    'IdfSabado', w2,
                    'IdfDomingo', w2,
                    'DesSala', w1
                ]);
            }
        }
    }
}
