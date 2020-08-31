
namespace GymAction.AulaInstrutor {

    @Serenity.Decorators.registerClass()
    export class AulaInstrutorDialog extends Serenity.EntityDialog<AulaInstrutorRow, any> {
        protected getFormKey() { return AulaInstrutorForm.formKey; }
        protected getIdProperty() { return AulaInstrutorRow.idProperty; }
        protected getLocalTextPrefix() { return AulaInstrutorRow.localTextPrefix; }
        protected getNameProperty() { return AulaInstrutorRow.nameProperty; }
        protected getService() { return AulaInstrutorService.baseUrl; }
        protected getDeletePermission() { return AulaInstrutorRow.deletePermission; }
        protected getInsertPermission() { return AulaInstrutorRow.insertPermission; }
        protected getUpdatePermission() { return AulaInstrutorRow.updatePermission; }

        protected form = new AulaInstrutorForm(this.idPrefix);

    }
}