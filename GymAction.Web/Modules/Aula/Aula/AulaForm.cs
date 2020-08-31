
namespace GymAction.Aula.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Aula.Aula")]
    [BasedOnRow(typeof(Entities.AulaRow), CheckNames = true)]
    public class AulaForm
    {
        [DisplayName("Aula")]
        public String DesAula { get; set; }
        [DisplayName("Tipo de Aula")]
        public AulaTipo IdfTipoAtividade { get; set; }
        [DisplayName("Ativo")]
        public Boolean IdfAtivo { get; set; }
    }
}