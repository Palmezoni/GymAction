
namespace GymAction.Instrutor.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Instrutor.Instrutor")]
    [BasedOnRow(typeof(Entities.InstrutorRow), CheckNames = true)]
    public class InstrutorColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CodInstrutor { get; set; }
        [EditLink]
        [Width(300)]
        public String DesNome { get; set; }
        public String DesRg { get; set; }
        public String DesCpf { get; set; }
        [Width(150)]
        public InstrutorTipo IdfTipoAtividade { get; set; }
        public Boolean IdfAtivo { get; set; }
    }
}