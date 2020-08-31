
namespace GymAction.Cliente.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Cliente.Cliente")]
    [BasedOnRow(typeof(Entities.ClienteRow), CheckNames = true)]
    public class ClienteForm
    {
        public Int32 CodBiometria { get; set; }
        public String DesNome { get; set; }
        public String DesRg { get; set; }
        public String DesCpf { get; set; }
        public Boolean IdfAdimplente { get; set; }
        public Boolean IdfAtivo { get; set; }
        public String DesEndereco { get; set; }
    }
}