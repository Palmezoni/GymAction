
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
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Instrutor/Instrutor/ListExcel',
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