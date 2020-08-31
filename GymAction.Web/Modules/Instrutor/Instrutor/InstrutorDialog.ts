
namespace GymAction.Instrutor {

    @Serenity.Decorators.registerClass()
    export class InstrutorDialog extends Serenity.EntityDialog<InstrutorRow, any> {
        protected getFormKey() { return InstrutorForm.formKey; }
        protected getIdProperty() { return InstrutorRow.idProperty; }
        protected getLocalTextPrefix() { return InstrutorRow.localTextPrefix; }
        protected getNameProperty() { return InstrutorRow.nameProperty; }
        protected getService() { return InstrutorService.baseUrl; }
        protected getDeletePermission() { return InstrutorRow.deletePermission; }
        protected getInsertPermission() { return InstrutorRow.insertPermission; }
        protected getUpdatePermission() { return InstrutorRow.updatePermission; }

        protected form = new InstrutorForm(this.idPrefix);

    }
}