
namespace GymAction.Aula.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Aula.Aula")]
    [BasedOnRow(typeof(Entities.AulaRow), CheckNames = true)]
    public class AulaColumns
    {
        [EditLink, DisplayName("Código"), AlignCenter, Visible(false)]
        public Int32 CodAula { get; set; }
        [EditLink, DisplayName("Aula")]
        public String DesAula { get; set; }
        [DisplayName("Tipo de Aula"), Width(100), QuickFilter]
        public AulaTipo IdfTipoAtividade { get; set; }
        [DisplayName("Ativo"), QuickFilter]
        public Boolean IdfAtivo { get; set; }
    }
}