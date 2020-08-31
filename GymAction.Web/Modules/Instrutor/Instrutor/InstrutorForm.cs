
namespace GymAction.Instrutor.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Instrutor.Instrutor")]
    [BasedOnRow(typeof(Entities.InstrutorRow), CheckNames = true)]
    public class InstrutorForm
    {
        public String DesNome { get; set; }
        public String DesRg { get; set; }
        public String DesCpf { get; set; }
        public InstrutorTipo IdfTipoAtividade { get; set; }
        public Boolean IdfAtivo { get; set; }
    }
}