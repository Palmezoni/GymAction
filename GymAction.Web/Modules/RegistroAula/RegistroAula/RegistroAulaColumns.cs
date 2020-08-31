
namespace GymAction.RegistroAula.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Data.Mapping;

    [ColumnsScript("RegistroAula.RegistroAula")]
    [BasedOnRow(typeof(Entities.RegistroAulaRow), CheckNames = true)]
    public class RegistroAulaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Visible(false)]
        public Int32 CodRegistro { get; set; }
        [EditLink, DisplayName("Plano"), Width(250), QuickSearch, QuickFilter]
        public String CodPlanoDesNome { get; set; }
        [EditLink, DisplayName("Aula"), Width(250), QuickSearch, QuickFilter]
        public String CodAulaDesAula { get; set; }
        [EditLink, DisplayName("Cliente"), Width(250), QuickSearch, QuickFilter]
        public String CodClienteDesNome { get; set; }
        [DisplayName("Data")]
        public DateTime DatAula { get; set; }
    }
}