
namespace GymAction.PlanoAula {

    @Serenity.Decorators.registerClass()
    export class PlanoAulaDialog extends Serenity.EntityDialog<PlanoAulaRow, any> {
        protected getFormKey() { return PlanoAulaForm.formKey; }
        protected getIdProperty() { return PlanoAulaRow.idProperty; }
        protected getLocalTextPrefix() { return PlanoAulaRow.localTextPrefix; }
        protected getService() { return PlanoAulaService.baseUrl; }
        protected getDeletePermission() { return PlanoAulaRow.deletePermission; }
        protected getInsertPermission() { return PlanoAulaRow.insertPermission; }
        protected getUpdatePermission() { return PlanoAulaRow.updatePermission; }

        protected form = new PlanoAulaForm(this.idPrefix);

    }
}