
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
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'PlanoAula/PlanoAula/ListExcel',
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