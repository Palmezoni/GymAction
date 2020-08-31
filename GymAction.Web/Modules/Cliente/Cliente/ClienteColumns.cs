
namespace GymAction.Cliente.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Cliente.Cliente")]
    [BasedOnRow(typeof(Entities.ClienteRow), CheckNames = true)]
    public class ClienteColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CodCliente { get; set; }
        [EditLink]
        [Width(300)]
        public String DesNome { get; set; }
        public String DesRg { get; set; }
        public String DesCpf { get; set; }
        [Width(80), QuickFilter]
        public Boolean IdfAdimplente { get; set; }
        [QuickFilter]
        public Boolean IdfAtivo { get; set; }
        [Width(300)]
        public String DesEndereco { get; set; }
        [Width(100)]
        public Int32 CodBiometria { get; set; }
    }
}