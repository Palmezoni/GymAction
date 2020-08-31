
namespace GymAction.AulaInstrutor {

    @Serenity.Decorators.registerClass()
    export class AulaInstrutorGrid extends Serenity.EntityGrid<AulaInstrutorRow, any> {
        protected getColumnsKey() { return 'AulaInstrutor.AulaInstrutor'; }
        protected getDialogType() { return AulaInstrutorDialog; }
        protected getIdProperty() { return AulaInstrutorRow.idProperty; }
        protected getInsertPermission() { return AulaInstrutorRow.insertPermission; }
        protected getLocalTextPrefix() { return AulaInstrutorRow.localTextPrefix; }
        protected getService() { return AulaInstrutorService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}