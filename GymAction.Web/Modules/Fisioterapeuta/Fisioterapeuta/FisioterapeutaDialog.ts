
namespace GymAction.Fisioterapeuta {

    @Serenity.Decorators.registerClass()
    export class FisioterapeutaDialog extends Serenity.EntityDialog<FisioterapeutaRow, any> {
        protected getFormKey() { return FisioterapeutaForm.formKey; }
        protected getIdProperty() { return FisioterapeutaRow.idProperty; }
        protected getLocalTextPrefix() { return FisioterapeutaRow.localTextPrefix; }
        protected getNameProperty() { return FisioterapeutaRow.nameProperty; }
        protected getService() { return FisioterapeutaService.baseUrl; }
        protected getDeletePermission() { return FisioterapeutaRow.deletePermission; }
        protected getInsertPermission() { return FisioterapeutaRow.insertPermission; }
        protected getUpdatePermission() { return FisioterapeutaRow.updatePermission; }

        protected form = new FisioterapeutaForm(this.idPrefix);

    }
}