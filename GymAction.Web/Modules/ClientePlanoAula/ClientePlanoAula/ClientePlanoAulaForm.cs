
namespace GymAction.ClientePlanoAula.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ClientePlanoAula.ClientePlanoAula")]
    [BasedOnRow(typeof(Entities.ClientePlanoAulaRow), CheckNames = true)]
    public class ClientePlanoAulaForm
    {
        public Int32 Plano { get; set; }
        public Int32 Aula { get; set; }
        public Int32 Cliente { get; set; }
    }
}