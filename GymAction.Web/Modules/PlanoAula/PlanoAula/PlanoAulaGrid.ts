
namespace GymAction.PlanoAula {

    @Serenity.Decorators.registerClass()
    export class PlanoAulaGrid extends Serenity.EntityGrid<PlanoAulaRow, any> {
        protected getColumnsKey() { return 'PlanoAula.PlanoAula'; }
        protected getDialogType() { return PlanoAulaDialog; }
        protected getIdProperty() { return PlanoAulaRow.idProperty; }
        protected getInsertPermission() { return PlanoAulaRow.insertPermission; }
        protected getLocalTextPrefix() { return PlanoAulaRow.localTextPrefix; }
        protected getService() { return PlanoAulaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}