
namespace GymAction.PlanoAula.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Data.Mapping;

    [ColumnsScript("PlanoAula.PlanoAula")]
    [BasedOnRow(typeof(Entities.PlanoAulaRow), CheckNames = true)]
    public class PlanoAulaColumns
    {
        [EditLink, DisplayName("Plano"), Width(250), QuickSearch, QuickFilter]
        public String CodPlanoDesNome { get; set; }
        [EditLink, DisplayName("Aula"), Width(400), QuickSearch, QuickFilter]
        public String CodAulaDesAula { get; set; }
        public Decimal VlrAula { get; set; }
    }
}