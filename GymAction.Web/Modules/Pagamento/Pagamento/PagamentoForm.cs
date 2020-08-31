
namespace GymAction.Pagamento.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Pagamento.Pagamento")]
    [BasedOnRow(typeof(Entities.PagamentoRow), CheckNames = true)]
    public class PagamentoForm
    {
        public Int32 CodPlano { get; set; }
        public Int32 CodAula { get; set; }
        public Int32 CodCliente { get; set; }
        public DateTime DatVencimento { get; set; }
        public DateTime DatPagamento { get; set; }
        public Decimal VlrPago { get; set; }
    }
}