
namespace GymAction.ClientePlanoAula.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Data.Mapping;

    [ColumnsScript("ClientePlanoAula.ClientePlanoAula")]
    [BasedOnRow(typeof(Entities.ClientePlanoAulaRow), CheckNames = true)]
    public class ClientePlanoAulaColumns
    {
        [EditLink, DisplayName("Plano"), Width(250), QuickSearch, QuickFilter]
        public String PlanoDesNome { get; set; }
        [EditLink, DisplayName("Aula"), Width(300), QuickSearch, QuickFilter]
        public String AulaDesAula { get; set; }
        [EditLink, DisplayName("Cliente"), Width(400), QuickSearch, QuickFilter]
        public String ClienteDesNome { get; set; }
    }
}