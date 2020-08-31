using Serenity.Navigation;
using Administration = GymAction.Administration.Pages;
using Aula = GymAction.Aula.Pages;
using AulaInstrutor = GymAction.AulaInstrutor.Pages;
using AvaliacaoFisica = GymAction.AvaliacaoFisica.Pages;
using Cliente = GymAction.Cliente.Pages;
using ClientePlanoAula = GymAction.ClientePlanoAula.Pages;
using Ferias = GymAction.Ferias.Pages;
using Fisioterapeuta = GymAction.Fisioterapeuta.Pages;
using Instrutor = GymAction.Instrutor.Pages;
using Pagamento = GymAction.Pagamento.Pages;
using Plano = GymAction.Plano.Pages;
using PlanoAula = GymAction.PlanoAula.Pages;
using RegistroAula = GymAction.RegistroAula.Pages;

// Dashboard
//[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]

//Administrador
//[assembly: NavigationLink(2000, "Administrador", url: "~/", permission: "", icon: "fa-user-circle")]

// Administration
[assembly: NavigationMenu(1500, "Administration", icon: "fa-desktop")]
[assembly: NavigationLink(1501, "Administration/User Management", typeof(Administration.UserController), icon: "fa-users")]
[assembly: NavigationLink(1502, "Administration/Roles", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(1503, "Administration/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(1504, "Administration/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]
//[assembly: NavigationLink(9000, "Administration/Sergen", typeof(Administration.SergenController), icon: "fa-magic")]

[assembly: NavigationLink(2000, "Aulas", typeof(Aula.AulaController), icon: "fa-heart")]
[assembly: NavigationLink(2001, "Aulas vs Instrutores", typeof(AulaInstrutor.AulaInstrutorController), icon: "fa-address-card")]
[assembly: NavigationLink(2002, "Avaliações Físicas", typeof(AvaliacaoFisica.AvaliacaoFisicaController), icon: "fa-heartbeat")]
[assembly: NavigationLink(2003, "Clientes", typeof(Cliente.ClienteController), icon: "fa-address-book")]
[assembly: NavigationLink(2004, "Clientes vs Aulas", typeof(ClientePlanoAula.ClientePlanoAulaController), icon: "fa-handshake-o")]
[assembly: NavigationLink(2005, "Férias", typeof(Ferias.FeriasController), icon: "fa-road")]
[assembly: NavigationLink(2006, "Fisioterapeutas", typeof(Fisioterapeuta.FisioterapeutaController), icon: "fa-user-md")]
[assembly: NavigationLink(2007, "Instrutores", typeof(Instrutor.InstrutorController), icon: "fa-user-circle")]
[assembly: NavigationLink(2008, "Pagamentos", typeof(Pagamento.PagamentoController), icon: "fa-money")]
[assembly: NavigationLink(2009, "Planos", typeof(Plano.PlanoController), icon: "fa-book")]
[assembly: NavigationLink(2010, "Planos vs Aulas", typeof(PlanoAula.PlanoAulaController), icon: "fa-clipboard")]
[assembly: NavigationLink(2011, "Registrar Presença", typeof(RegistroAula.RegistroAulaController), icon: "fa-hand-o-down")]

// Gerente
//[assembly: NavigationLink(3000, "Gerente", url: "~/", permission: "", icon: "fa-user-circle")]

// Recepcionista
//[assembly: NavigationLink(4000, "Recepcionista", url: "~/", permission: "", icon: "fa-user-circle-o")]
//[assembly: NavigationLink(4001, "Recepcionista/Fisioterapeuta", typeof(Fisioterapeuta.FisioterapeutaController), icon: null)]

// Aluno
//[assembly: NavigationLink(5000, "Aluno", url: "~/", permission: "", icon: "fa-user-o")]

// Fisioterapeuta
//[assembly: NavigationLink(6000, "Fisioterapeuta", url: "~/", permission: "", icon: "fa-user-md")]
