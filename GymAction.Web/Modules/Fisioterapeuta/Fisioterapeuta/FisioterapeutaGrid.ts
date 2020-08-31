
namespace GymAction.Fisioterapeuta {

    @Serenity.Decorators.registerClass()
    export class FisioterapeutaGrid extends Serenity.EntityGrid<FisioterapeutaRow, any> {
        protected getColumnsKey() { return 'Fisioterapeuta.Fisioterapeuta'; }
        protected getDialogType() { return FisioterapeutaDialog; }
        protected getIdProperty() { return FisioterapeutaRow.idProperty; }
        protected getInsertPermission() { return FisioterapeutaRow.insertPermission; }
        protected getLocalTextPrefix() { return FisioterapeutaRow.localTextPrefix; }
        protected getService() { return FisioterapeutaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}