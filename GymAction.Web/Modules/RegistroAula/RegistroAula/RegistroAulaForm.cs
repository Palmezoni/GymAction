
namespace GymAction.RegistroAula.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("RegistroAula.RegistroAula")]
    [BasedOnRow(typeof(Entities.RegistroAulaRow), CheckNames = true)]
    public class RegistroAulaForm
    {
        public Int32 CodPlano { get; set; }
        public Int32 CodAula { get; set; }
        public Int32 CodCliente { get; set; }
        public DateTime DatAula { get; set; }
    }
}