
namespace GymAction.Ferias {

    @Serenity.Decorators.registerClass()
    export class FeriasDialog extends Serenity.EntityDialog<FeriasRow, any> {
        protected getFormKey() { return FeriasForm.formKey; }
        protected getIdProperty() { return FeriasRow.idProperty; }
        protected getLocalTextPrefix() { return FeriasRow.localTextPrefix; }
        protected getService() { return FeriasService.baseUrl; }
        protected getDeletePermission() { return FeriasRow.deletePermission; }
        protected getInsertPermission() { return FeriasRow.insertPermission; }
        protected getUpdatePermission() { return FeriasRow.updatePermission; }

        protected form = new FeriasForm(this.idPrefix);

    }
}