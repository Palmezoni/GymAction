
namespace GymAction.Aula {

    @Serenity.Decorators.registerClass()
    export class AulaDialog extends Serenity.EntityDialog<AulaRow, any> {
        protected getFormKey() { return AulaForm.formKey; }
        protected getIdProperty() { return AulaRow.idProperty; }
        protected getLocalTextPrefix() { return AulaRow.localTextPrefix; }
        protected getNameProperty() { return AulaRow.nameProperty; }
        protected getService() { return AulaService.baseUrl; }
        protected getDeletePermission() { return AulaRow.deletePermission; }
        protected getInsertPermission() { return AulaRow.insertPermission; }
        protected getUpdatePermission() { return AulaRow.updatePermission; }

        protected form = new AulaForm(this.idPrefix);

    }
}