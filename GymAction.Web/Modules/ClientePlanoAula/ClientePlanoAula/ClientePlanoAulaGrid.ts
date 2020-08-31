
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
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'ClientePlanoAula/ClientePlanoAula/ListExcel',
                separator: true
            }));

            buttons.push(GymAction.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}