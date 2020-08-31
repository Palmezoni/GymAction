
namespace GymAction.Instrutor {

    @Serenity.Decorators.registerClass()
    export class InstrutorGrid extends Serenity.EntityGrid<InstrutorRow, any> {
        protected getColumnsKey() { return 'Instrutor.Instrutor'; }
        protected getDialogType() { return InstrutorDialog; }
        protected getIdProperty() { return InstrutorRow.idProperty; }
        protected getInsertPermission() { return InstrutorRow.insertPermission; }
        protected getLocalTextPrefix() { return InstrutorRow.localTextPrefix; }
        protected getService() { return InstrutorService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}