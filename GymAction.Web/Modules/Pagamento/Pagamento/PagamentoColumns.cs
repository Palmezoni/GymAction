
namespace GymAction.Pagamento.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Data.Mapping;

    [ColumnsScript("Pagamento.Pagamento")]
    [BasedOnRow(typeof(Entities.PagamentoRow), CheckNames = true)]
    public class PagamentoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Visible(false)]
        public Int32 CodPagamento { get; set; }
        [EditLink, DisplayName("Plano"), Width(250), QuickSearch, QuickFilter]
        public String CodPlanoDesNome { get; set; }
        [EditLink, DisplayName("Aula"), Width(300), QuickSearch, QuickFilter]
        public String CodAulaDesAula { get; set; }
        [EditLink, DisplayName("Cliente"), Width(300), QuickSearch, QuickFilter]
        public String CodClienteDesNome { get; set; }
        [DisplayName("Data de Vencimento"), Width(150)]
        public DateTime DatVencimento { get; set; }
        [DisplayName("Data de Pagamento"), Width(150)]
        public DateTime DatPagamento { get; set; }
        [DisplayName("Valor"), Width(100)]
        public Decimal VlrPago { get; set; }
    }
}