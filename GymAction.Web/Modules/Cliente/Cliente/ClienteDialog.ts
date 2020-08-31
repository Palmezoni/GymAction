
namespace GymAction.Cliente {

    @Serenity.Decorators.registerClass()
    export class ClienteDialog extends Serenity.EntityDialog<ClienteRow, any> {
        protected getFormKey() { return ClienteForm.formKey; }
        protected getIdProperty() { return ClienteRow.idProperty; }
        protected getLocalTextPrefix() { return ClienteRow.localTextPrefix; }
        protected getNameProperty() { return ClienteRow.nameProperty; }
        protected getService() { return ClienteService.baseUrl; }
        protected getDeletePermission() { return ClienteRow.deletePermission; }
        protected getInsertPermission() { return ClienteRow.insertPermission; }
        protected getUpdatePermission() { return ClienteRow.updatePermission; }

        protected form = new ClienteForm(this.idPrefix);

    }
}