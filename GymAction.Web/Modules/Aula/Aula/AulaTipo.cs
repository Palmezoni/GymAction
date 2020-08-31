using Serenity.ComponentModel;
using System.ComponentModel;

namespace GymAction.Aula
{
    [EnumKey("Aula.AulaTipo")]
    public enum AulaTipo
    {
        [Description("Individual")]
        Individual = 1,
        [Description("Grupo")]
        Grupo = 0
    }
}