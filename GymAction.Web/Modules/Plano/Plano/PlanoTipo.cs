using Serenity.ComponentModel;
using System.ComponentModel;

namespace GymAction.Plano
{
    [EnumKey("Plano.PlanoTipo")]
    public enum PlanoTipo
    {
        [Description("Mensal")]
        Mensal = 0,
        [Description("Anual")]
        Anual = 1
    }
}