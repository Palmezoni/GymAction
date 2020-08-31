
namespace GymAction.AvaliacaoFisica.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AvaliacaoFisica.AvaliacaoFisica")]
    [BasedOnRow(typeof(Entities.AvaliacaoFisicaRow), CheckNames = true)]
    public class AvaliacaoFisicaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CodAvaliacaoFisica { get; set; }
        [EditLink, QuickFilter]
        public String CodClienteDesNome { get; set; }
        [EditLink, QuickFilter]
        public String CodFisioterapeutaDesNome { get; set; }
        public String DesAnamnese { get; set; }
        public String DesExameDobras { get; set; }
        public String DesExameErgometrico { get; set; }
        [Width(150)]
        public DateTime DatAvaliacao { get; set; }
    }
}