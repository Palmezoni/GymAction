
namespace GymAction.Fisioterapeuta.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Fisioterapeuta.Fisioterapeuta")]
    [BasedOnRow(typeof(Entities.FisioterapeutaRow), CheckNames = true)]
    public class FisioterapeutaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CodFisioterapeuta { get; set; }
        [EditLink, Width(200)]
        public String DesNome { get; set; }
        public Boolean IdfAtivo { get; set; }
    }
}