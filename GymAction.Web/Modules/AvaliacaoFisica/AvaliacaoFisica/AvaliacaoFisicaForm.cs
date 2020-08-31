
namespace GymAction.AvaliacaoFisica.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AvaliacaoFisica.AvaliacaoFisica")]
    [BasedOnRow(typeof(Entities.AvaliacaoFisicaRow), CheckNames = true)]
    public class AvaliacaoFisicaForm
    {
        [DisplayName("Cliente")]
        public Int32 CodCliente { get; set; }
        [DisplayName("Fisioterapeuta")]
        public Int32 CodFisioterapeuta { get; set; }
        [DisplayName("Anamnese")]
        public String DesAnamnese { get; set; }
        [DisplayName("Exame Dobras")]
        public String DesExameDobras { get; set; }
        [DisplayName("Exame Ergométrico")]
        public String DesExameErgometrico { get; set; }
        [DisplayName("Data da Avaliação")]
        public DateTime DatAvaliacao { get; set; }
    }
}