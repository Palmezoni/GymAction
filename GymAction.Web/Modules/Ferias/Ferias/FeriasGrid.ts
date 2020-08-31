
namespace GymAction.Ferias {

    @Serenity.Decorators.registerClass()
    export class FeriasGrid extends Serenity.EntityGrid<FeriasRow, any> {
        protected getColumnsKey() { return 'Ferias.Ferias'; }
        protected getDialogType() { return FeriasDialog; }
        protected getIdProperty() { return FeriasRow.idProperty; }
        protected getInsertPermission() { return FeriasRow.insertPermission; }
        protected getLocalTextPrefix() { return FeriasRow.localTextPrefix; }
        protected getService() { return FeriasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}