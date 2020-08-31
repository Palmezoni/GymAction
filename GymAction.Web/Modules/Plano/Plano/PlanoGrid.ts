
namespace GymAction.Plano {

    @Serenity.Decorators.registerClass()
    export class PlanoGrid extends Serenity.EntityGrid<PlanoRow, any> {
        protected getColumnsKey() { return 'Plano.Plano'; }
        protected getDialogType() { return PlanoDialog; }
        protected getIdProperty() { return PlanoRow.idProperty; }
        protected getInsertPermission() { return PlanoRow.insertPermission; }
        protected getLocalTextPrefix() { return PlanoRow.localTextPrefix; }
        protected getService() { return PlanoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}