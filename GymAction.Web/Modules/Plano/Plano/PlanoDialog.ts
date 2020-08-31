
namespace GymAction.Plano {

    @Serenity.Decorators.registerClass()
    export class PlanoDialog extends Serenity.EntityDialog<PlanoRow, any> {
        protected getFormKey() { return PlanoForm.formKey; }
        protected getIdProperty() { return PlanoRow.idProperty; }
        protected getLocalTextPrefix() { return PlanoRow.localTextPrefix; }
        protected getNameProperty() { return PlanoRow.nameProperty; }
        protected getService() { return PlanoService.baseUrl; }
        protected getDeletePermission() { return PlanoRow.deletePermission; }
        protected getInsertPermission() { return PlanoRow.insertPermission; }
        protected getUpdatePermission() { return PlanoRow.updatePermission; }

        protected form = new PlanoForm(this.idPrefix);

    }
}