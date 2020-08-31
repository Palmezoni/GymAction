
namespace GymAction.Fisioterapeuta.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Fisioterapeuta.Fisioterapeuta")]
    [BasedOnRow(typeof(Entities.FisioterapeutaRow), CheckNames = true)]
    public class FisioterapeutaForm
    {
        public String DesNome { get; set; }
        public Boolean IdfAtivo { get; set; }
    }
}