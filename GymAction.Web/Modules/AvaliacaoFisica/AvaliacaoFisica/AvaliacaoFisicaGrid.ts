
namespace GymAction.AvaliacaoFisica {

    @Serenity.Decorators.registerClass()
    export class AvaliacaoFisicaGrid extends Serenity.EntityGrid<AvaliacaoFisicaRow, any> {
        protected getColumnsKey() { return 'AvaliacaoFisica.AvaliacaoFisica'; }
        protected getDialogType() { return AvaliacaoFisicaDialog; }
        protected getIdProperty() { return AvaliacaoFisicaRow.idProperty; }
        protected getInsertPermission() { return AvaliacaoFisicaRow.insertPermission; }
        protected getLocalTextPrefix() { return AvaliacaoFisicaRow.localTextPrefix; }
        protected getService() { return AvaliacaoFisicaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(GymAction.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'AvaliacaoFisica/AvaliacaoFisica/ListExcel',
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