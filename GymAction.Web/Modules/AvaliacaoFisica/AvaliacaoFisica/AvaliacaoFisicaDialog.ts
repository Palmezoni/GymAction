
namespace GymAction.AvaliacaoFisica {

    @Serenity.Decorators.registerClass()
    export class AvaliacaoFisicaDialog extends Serenity.EntityDialog<AvaliacaoFisicaRow, any> {
        protected getFormKey() { return AvaliacaoFisicaForm.formKey; }
        protected getIdProperty() { return AvaliacaoFisicaRow.idProperty; }
        protected getLocalTextPrefix() { return AvaliacaoFisicaRow.localTextPrefix; }
        protected getNameProperty() { return AvaliacaoFisicaRow.nameProperty; }
        protected getService() { return AvaliacaoFisicaService.baseUrl; }
        protected getDeletePermission() { return AvaliacaoFisicaRow.deletePermission; }
        protected getInsertPermission() { return AvaliacaoFisicaRow.insertPermission; }
        protected getUpdatePermission() { return AvaliacaoFisicaRow.updatePermission; }

        protected form = new AvaliacaoFisicaForm(this.idPrefix);

    }
}