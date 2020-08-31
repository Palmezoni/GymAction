
namespace GymAction.RegistroAula {

    @Serenity.Decorators.registerClass()
    export class RegistroAulaDialog extends Serenity.EntityDialog<RegistroAulaRow, any> {
        protected getFormKey() { return RegistroAulaForm.formKey; }
        protected getIdProperty() { return RegistroAulaRow.idProperty; }
        protected getLocalTextPrefix() { return RegistroAulaRow.localTextPrefix; }
        protected getService() { return RegistroAulaService.baseUrl; }
        protected getDeletePermission() { return RegistroAulaRow.deletePermission; }
        protected getInsertPermission() { return RegistroAulaRow.insertPermission; }
        protected getUpdatePermission() { return RegistroAulaRow.updatePermission; }

        protected form = new RegistroAulaForm(this.idPrefix);

    }
}