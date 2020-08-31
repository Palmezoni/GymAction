
namespace GymAction.Ferias.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Data.Mapping;

    [ColumnsScript("Ferias.Ferias")]
    [BasedOnRow(typeof(Entities.FeriasRow), CheckNames = true)]
    public class FeriasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CodFerias { get; set; }
        [EditLink, DisplayName("Plano"), Width(250), QuickSearch, QuickFilter]
        public String CodPlanoDesNome { get; set; }
        [EditLink, DisplayName("Aula"), Width(300), QuickSearch, QuickFilter]
        public String CodAulaDesAula { get; set; }
        [EditLink, DisplayName("Cliente"), Width(400), QuickSearch, QuickFilter]
        public String CodClienteDesNome { get; set; }
        [DisplayName("Início")]
        public DateTime DatInicio { get; set; }
        [DisplayName("Fim")]
        public DateTime DatFim { get; set; }
    }
}