
namespace GymAction.Cliente {

    @Serenity.Decorators.registerClass()
    export class ClienteGrid extends Serenity.EntityGrid<ClienteRow, any> {
        protected getColumnsKey() { return 'Cliente.Cliente'; }
        protected getDialogType() { return ClienteDialog; }
        protected getIdProperty() { return ClienteRow.idProperty; }
        protected getInsertPermission() { return ClienteRow.insertPermission; }
        protected getLocalTextPrefix() { return ClienteRow.localTextPrefix; }
        protected getService() { return ClienteService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Cliente/Cliente/ListExcel',
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