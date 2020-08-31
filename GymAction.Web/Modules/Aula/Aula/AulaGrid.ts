
namespace GymAction.Aula {

    @Serenity.Decorators.registerClass()
    export class AulaGrid extends Serenity.EntityGrid<AulaRow, any> {
        protected getColumnsKey() { return 'Aula.Aula'; }
        protected getDialogType() { return AulaDialog; }
        protected getIdProperty() { return AulaRow.idProperty; }
        protected getInsertPermission() { return AulaRow.insertPermission; }
        protected getLocalTextPrefix() { return AulaRow.localTextPrefix; }
        protected getService() { return AulaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Aula/Aula/ListExcel',
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