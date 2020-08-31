
namespace GymAction.ClientePlanoAula {

    @Serenity.Decorators.registerClass()
    export class ClientePlanoAulaDialog extends Serenity.EntityDialog<ClientePlanoAulaRow, any> {
        protected getFormKey() { return ClientePlanoAulaForm.formKey; }
        protected getIdProperty() { return ClientePlanoAulaRow.idProperty; }
        protected getLocalTextPrefix() { return ClientePlanoAulaRow.localTextPrefix; }
        protected getService() { return ClientePlanoAulaService.baseUrl; }
        protected getDeletePermission() { return ClientePlanoAulaRow.deletePermission; }
        protected getInsertPermission() { return ClientePlanoAulaRow.insertPermission; }
        protected getUpdatePermission() { return ClientePlanoAulaRow.updatePermission; }

        protected form = new ClientePlanoAulaForm(this.idPrefix);

    }
}