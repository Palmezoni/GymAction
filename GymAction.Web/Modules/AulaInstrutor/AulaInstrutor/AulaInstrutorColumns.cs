
namespace GymAction.AulaInstrutor.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Data.Mapping;

    [ColumnsScript("AulaInstrutor.AulaInstrutor")]
    [BasedOnRow(typeof(Entities.AulaInstrutorRow), CheckNames = true)]
    public class AulaInstrutorColumns
    {
        [EditLink, DisplayName("Aula"), Width(150), QuickSearch, QuickFilter]
        public String CodAulaDesAula { get; set; }
        [EditLink, DisplayName("Instrutor"), Width(150), QuickSearch, QuickFilter]
        public String CodInstrutorDesNome { get; set; }
        [DisplayName("Início"), Width(50)]
        public String HorInicio { get; set; }
        [DisplayName("Fim"), Width(50)]
        public String HorFim { get; set; }
        [DisplayName("Segunda"), Width(80)]
        public Boolean IdfSegunda { get; set; }
        [DisplayName("Terça"), Width(80)]
        public Boolean IdfTerca { get; set; }
        [DisplayName("Quarta"), Width(80)]
        public Boolean IdfQuarta { get; set; }
        [DisplayName("Quinta"), Width(80)]
        public Boolean IdfQuinta { get; set; }
        [DisplayName("Sexta"), Width(80)]
        public Boolean IdfSexta { get; set; }
        [DisplayName("Sábado"), Width(80)]
        public Boolean IdfSabado { get; set; }
        [DisplayName("Domingo"), Width(80)]
        public Boolean IdfDomingo { get; set; }
        [DisplayName("Sala")]
        public String DesSala { get; set; }
    }
}