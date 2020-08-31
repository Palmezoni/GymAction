
namespace GymAction.PlanoAula.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PlanoAula.PlanoAula")]
    [BasedOnRow(typeof(Entities.PlanoAulaRow), CheckNames = true)]
    public class PlanoAulaForm
    {
        [DisplayName("Plano")]
        public Int32 CodPlano { get; set; }
        [DisplayName("Aula")]
        public Int32 CodAula { get; set; }
        [DisplayName("Valor")]
        public Decimal VlrAula { get; set; }
    }
}