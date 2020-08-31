
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
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'RegistroAula/RegistroAula/ListExcel',
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