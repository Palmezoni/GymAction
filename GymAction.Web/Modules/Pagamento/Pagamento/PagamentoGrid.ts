
namespace GymAction.Pagamento {

    @Serenity.Decorators.registerClass()
    export class PagamentoGrid extends Serenity.EntityGrid<PagamentoRow, any> {
        protected getColumnsKey() { return 'Pagamento.Pagamento'; }
        protected getDialogType() { return PagamentoDialog; }
        protected getIdProperty() { return PagamentoRow.idProperty; }
        protected getInsertPermission() { return PagamentoRow.insertPermission; }
        protected getLocalTextPrefix() { return PagamentoRow.localTextPrefix; }
        protected getService() { return PagamentoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}