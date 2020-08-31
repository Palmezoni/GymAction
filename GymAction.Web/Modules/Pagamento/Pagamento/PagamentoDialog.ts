
namespace GymAction.Pagamento {

    @Serenity.Decorators.registerClass()
    export class PagamentoDialog extends Serenity.EntityDialog<PagamentoRow, any> {
        protected getFormKey() { return PagamentoForm.formKey; }
        protected getIdProperty() { return PagamentoRow.idProperty; }
        protected getLocalTextPrefix() { return PagamentoRow.localTextPrefix; }
        protected getService() { return PagamentoService.baseUrl; }
        protected getDeletePermission() { return PagamentoRow.deletePermission; }
        protected getInsertPermission() { return PagamentoRow.insertPermission; }
        protected getUpdatePermission() { return PagamentoRow.updatePermission; }

        protected form = new PagamentoForm(this.idPrefix);

    }
}