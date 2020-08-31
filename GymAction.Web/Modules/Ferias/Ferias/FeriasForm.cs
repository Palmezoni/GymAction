
namespace GymAction.Ferias.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using Serenity.Data.Mapping;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Ferias.Ferias")]
    [BasedOnRow(typeof(Entities.FeriasRow), CheckNames = true)]
    public class FeriasForm
    {
        [EditLink, DisplayName("Plano")]
        public Int32 CodPlano { get; set; }
        [EditLink, DisplayName("Aula")]
        public Int32 CodAula { get; set; }
        [EditLink, DisplayName("Cliente")]
        public Int32 CodCliente { get; set; }
        [DisplayName("Início")]
        public DateTime DatInicio { get; set; }
        [DisplayName("Fim")]
        public DateTime DatFim { get; set; }
    }
}