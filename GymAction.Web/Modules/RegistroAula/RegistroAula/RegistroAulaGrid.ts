
namespace GymAction.RegistroAula {

    @Serenity.Decorators.registerClass()
    export class RegistroAulaGrid extends Serenity.EntityGrid<RegistroAulaRow, any> {
        protected getColumnsKey() { return 'RegistroAula.RegistroAula'; }
        protected getDialogType() { return RegistroAulaDialog; }
        protected getIdProperty() { return RegistroAulaRow.idProperty; }
        protected getInsertPermission() { return RegistroAulaRow.insertPermission; }
        protected getLocalTextPrefix() { return RegistroAulaRow.localTextPrefix; }
        protected getService() { return RegistroAulaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}