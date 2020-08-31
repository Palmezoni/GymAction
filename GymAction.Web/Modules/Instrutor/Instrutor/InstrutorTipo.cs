using Serenity.ComponentModel;
using System.ComponentModel;

namespace GymAction.Instrutor
{
    [EnumKey("Instrutor.InstrutorTipo")]
    public enum InstrutorTipo
    {
        [Description("Individual")]
        Individual = 0,
        [Description("Grupo")]
        Grupo = 1,
        [Description("Todas")]
        Todas = 2
    }
}