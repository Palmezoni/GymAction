
namespace GymAction.Plano.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using GymAction.Aula;

    [FormScript("Plano.Plano")]
    [BasedOnRow(typeof(Entities.PlanoRow), CheckNames = true)]
    public class PlanoForm
    {
        public String DesNome { get; set; }
        public PlanoTipo IdfTipo { get; set; }
        public Boolean IdfAivo { get; set; }
    }
}