using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Sergen
            {
                public const string SergenError = "~/Modules/Administration/Sergen/SergenError.cshtml";
                public const string SergenIndex = "~/Modules/Administration/Sergen/SergenIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Aula
        {
            public static class Aula_
            {
                public const string AulaIndex = "~/Modules/Aula/Aula/AulaIndex.cshtml";
            }

        }

        public static class AulaInstrutor
        {
            public static class AulaInstrutor_
            {
                public const string AulaInstrutorIndex = "~/Modules/AulaInstrutor/AulaInstrutor/AulaInstrutorIndex.cshtml";
            }

        }

        public static class AvaliacaoFisica
        {
            public static class AvaliacaoFisica_
            {
                public const string AvaliacaoFisicaIndex = "~/Modules/AvaliacaoFisica/AvaliacaoFisica/AvaliacaoFisicaIndex.cshtml";
            }

        }

        public static class Cliente
        {
            public static class Cliente_
            {
                public const string ClienteIndex = "~/Modules/Cliente/Cliente/ClienteIndex.cshtml";
            }

        }

        public static class ClientePlanoAula
        {
            public static class ClientePlanoAula_
            {
                public const string ClientePlanoAulaIndex = "~/Modules/ClientePlanoAula/ClientePlanoAula/ClientePlanoAulaIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Ferias
        {
            public static class Ferias_
            {
                public const string FeriasIndex = "~/Modules/Ferias/Ferias/FeriasIndex.cshtml";
            }

        }

        public static class Fisioterapeuta
        {
            public static class Fisioterapeuta_
            {
                public const string FisioterapeutaIndex = "~/Modules/Fisioterapeuta/Fisioterapeuta/FisioterapeutaIndex.cshtml";
            }

        }

        public static class Instrutor
        {
            public static class Instrutor_
            {
                public const string InstrutorIndex = "~/Modules/Instrutor/Instrutor/InstrutorIndex.cshtml";
            }

        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }

        }

        public static class Pagamento
        {
            public static class Pagamento_
            {
                public const string PagamentoIndex = "~/Modules/Pagamento/Pagamento/PagamentoIndex.cshtml";
            }

        }

        public static class Plano
        {
            public static class Plano_
            {
                public const string PlanoIndex = "~/Modules/Plano/Plano/PlanoIndex.cshtml";
            }

        }

        public static class PlanoAula
        {
            public static class PlanoAula_
            {
                public const string PlanoAulaIndex = "~/Modules/PlanoAula/PlanoAula/PlanoAulaIndex.cshtml";
            }

        }

        public static class RegistroAula
        {
            public static class RegistroAula_
            {
                public const string RegistroAulaIndex = "~/Modules/RegistroAula/RegistroAula/RegistroAulaIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

    }
}
