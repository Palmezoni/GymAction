
namespace GymAction.ClientePlanoAula {

    @Serenity.Decorators.registerClass()
    export class ClientePlanoAulaGrid extends Serenity.EntityGrid<ClientePlanoAulaRow, any> {
        protected getColumnsKey() { return 'ClientePlanoAula.ClientePlanoAula'; }
        protected getDialogType() { return ClientePlanoAulaDialog; }
        protected getIdProperty() { return ClientePlanoAulaRow.idProperty; }
        protected getInsertPermission() { return ClientePlanoAulaRow.insertPermission; }
        protected getLocalTextPrefix() { return ClientePlanoAulaRow.localTextPrefix; }
        protected getService() { return ClientePlanoAulaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}