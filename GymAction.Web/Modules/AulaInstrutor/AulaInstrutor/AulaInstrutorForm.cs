
namespace GymAction.AulaInstrutor.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AulaInstrutor.AulaInstrutor")]
    [BasedOnRow(typeof(Entities.AulaInstrutorRow), CheckNames = true)]
    public class AulaInstrutorForm
    {
        [DisplayName("Aula")]
        public Int32 CodAula { get; set; }
        [DisplayName("Instrutor")]
        public Int32 CodInstrutor { get; set; }
        [DisplayName("Início")]
        public String HorInicio { get; set; }
        [DisplayName("Fim")]
        public String HorFim { get; set; }
        [DisplayName("Segunda")]
        public Boolean IdfSegunda { get; set; }
        [DisplayName("Terça")]
        public Boolean IdfTerca { get; set; }
        [DisplayName("Quarta")]
        public Boolean IdfQuarta { get; set; }
        [DisplayName("Quinta")]
        public Boolean IdfQuinta { get; set; }
        [DisplayName("Sexta")]
        public Boolean IdfSexta { get; set; }
        [DisplayName("Sábado")]
        public Boolean IdfSabado { get; set; }
        [DisplayName("Domingo")]
        public Boolean IdfDomingo { get; set; }
        [DisplayName("Sala")]
        public String DesSala { get; set; }
    }
}