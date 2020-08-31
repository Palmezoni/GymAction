
namespace GymAction.Plano.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using GymAction.Aula;

    [ColumnsScript("Plano.Plano")]
    [BasedOnRow(typeof(Entities.PlanoRow), CheckNames = true)]
    public class PlanoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CodPlano { get; set; }
        [EditLink, Width(250)]
        public String DesNome { get; set; }
        public PlanoTipo IdfTipo { get; set; }
        public Boolean IdfAivo { get; set; }
    }
}