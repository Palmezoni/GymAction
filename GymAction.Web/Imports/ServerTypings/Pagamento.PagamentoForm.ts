namespace GymAction.Pagamento {
    export interface PagamentoForm {
        CodPlano: Serenity.LookupEditor;
        CodAula: Serenity.LookupEditor;
        CodCliente: Serenity.LookupEditor;
        DatVencimento: Serenity.DateEditor;
        DatPagamento: Serenity.DateEditor;
        VlrPago: Serenity.DecimalEditor;
    }

    export class PagamentoForm extends Serenity.PrefixedContext {
        static formKey = 'Pagamento.Pagamento';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PagamentoForm.init)  {
                PagamentoForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(PagamentoForm, [
                    'CodPlano', w0,
                    'CodAula', w0,
                    'CodCliente', w0,
                    'DatVencimento', w1,
                    'DatPagamento', w1,
                    'VlrPago', w2
                ]);
            }
        }
    }
}
