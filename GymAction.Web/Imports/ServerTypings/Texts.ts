namespace GymAction.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Aula {

            namespace Aula {
                export const CodAula: string;
                export const DesAula: string;
                export const IdfAtivo: string;
                export const IdfTipoAtividade: string;
            }
        }

        namespace AulaInstrutor {

            namespace AulaInstrutor {
                export const CodAula: string;
                export const CodAulaDesAula: string;
                export const CodAulaIdfAtivo: string;
                export const CodAulaIdfTipoAtividade: string;
                export const CodInstrutor: string;
                export const CodInstrutorDesCpf: string;
                export const CodInstrutorDesNome: string;
                export const CodInstrutorDesRg: string;
                export const CodInstrutorIdfAtivo: string;
                export const CodInstrutorIdfTipoAtividade: string;
                export const CodRegistro: string;
                export const DesSala: string;
                export const HorFim: string;
                export const HorInicio: string;
                export const IdfDomingo: string;
                export const IdfQuarta: string;
                export const IdfQuinta: string;
                export const IdfSabado: string;
                export const IdfSegunda: string;
                export const IdfSexta: string;
                export const IdfTerca: string;
            }
        }

        namespace AvaliacaoFisica {

            namespace AvaliacaoFisica {
                export const CodAvaliacaoFisica: string;
                export const CodCliente: string;
                export const CodClienteCodBiometria: string;
                export const CodClienteDesCpf: string;
                export const CodClienteDesEndereco: string;
                export const CodClienteDesNome: string;
                export const CodClienteDesRg: string;
                export const CodClienteIdfAdimplente: string;
                export const CodClienteIdfAtivo: string;
                export const CodFisioterapeuta: string;
                export const CodFisioterapeutaDesNome: string;
                export const CodFisioterapeutaIdfAtivo: string;
                export const DatAvaliacao: string;
                export const DesAnamnese: string;
                export const DesExameDobras: string;
                export const DesExameErgometrico: string;
            }
        }

        namespace Cliente {

            namespace Cliente {
                export const CodBiometria: string;
                export const CodCliente: string;
                export const DesCpf: string;
                export const DesEndereco: string;
                export const DesNome: string;
                export const DesRg: string;
                export const IdfAdimplente: string;
                export const IdfAtivo: string;
            }
        }

        namespace ClientePlanoAula {

            namespace ClientePlanoAula {
                export const Aula: string;
                export const AulaDesAula: string;
                export const AulaIdfAtivo: string;
                export const AulaIdfTipoAtividade: string;
                export const Cliente: string;
                export const ClienteCodBiometria: string;
                export const ClienteDesCpf: string;
                export const ClienteDesEndereco: string;
                export const ClienteDesNome: string;
                export const ClienteDesRg: string;
                export const ClienteIdfAdimplente: string;
                export const ClienteIdfAtivo: string;
                export const CodRegistro: string;
                export const Plano: string;
                export const PlanoDesNome: string;
                export const PlanoIdfAivo: string;
                export const PlanoIdfTipo: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Ferias {

            namespace Ferias {
                export const CodAula: string;
                export const CodAulaDesAula: string;
                export const CodAulaIdfAtivo: string;
                export const CodAulaIdfTipoAtividade: string;
                export const CodCliente: string;
                export const CodClienteCodBiometria: string;
                export const CodClienteDesCpf: string;
                export const CodClienteDesEndereco: string;
                export const CodClienteDesNome: string;
                export const CodClienteDesRg: string;
                export const CodClienteIdfAdimplente: string;
                export const CodClienteIdfAtivo: string;
                export const CodFerias: string;
                export const CodPlano: string;
                export const CodPlanoDesNome: string;
                export const CodPlanoIdfAivo: string;
                export const CodPlanoIdfTipo: string;
                export const DatFim: string;
                export const DatInicio: string;
            }
        }

        namespace Fisioterapeuta {

            namespace Fisioterapeuta {
                export const CodFisioterapeuta: string;
                export const DesNome: string;
                export const IdfAtivo: string;
            }
        }

        namespace Instrutor {

            namespace Instrutor {
                export const CodInstrutor: string;
                export const DesCpf: string;
                export const DesNome: string;
                export const DesRg: string;
                export const IdfAtivo: string;
                export const IdfTipoAtividade: string;
            }
        }

        namespace Pagamento {

            namespace Pagamento {
                export const CodAula: string;
                export const CodAulaDesAula: string;
                export const CodAulaIdfAtivo: string;
                export const CodAulaIdfTipoAtividade: string;
                export const CodCliente: string;
                export const CodClienteCodBiometria: string;
                export const CodClienteDesCpf: string;
                export const CodClienteDesEndereco: string;
                export const CodClienteDesNome: string;
                export const CodClienteDesRg: string;
                export const CodClienteIdfAdimplente: string;
                export const CodClienteIdfAtivo: string;
                export const CodPagamento: string;
                export const CodPlano: string;
                export const CodPlanoDesNome: string;
                export const CodPlanoIdfAivo: string;
                export const CodPlanoIdfTipo: string;
                export const DatPagamento: string;
                export const DatVencimento: string;
                export const VlrPago: string;
            }
        }

        namespace Plano {

            namespace Plano {
                export const CodPlano: string;
                export const DesNome: string;
                export const IdfAivo: string;
                export const IdfTipo: string;
            }
        }

        namespace PlanoAula {

            namespace PlanoAula {
                export const CodAula: string;
                export const CodAulaDesAula: string;
                export const CodAulaIdfAtivo: string;
                export const CodAulaIdfTipoAtividade: string;
                export const CodPlano: string;
                export const CodPlanoDesNome: string;
                export const CodPlanoIdfAivo: string;
                export const CodPlanoIdfTipo: string;
                export const CodRegistro: string;
                export const VlrAula: string;
            }
        }

        namespace RegistroAula {

            namespace RegistroAula {
                export const CodAula: string;
                export const CodAulaDesAula: string;
                export const CodAulaIdfAtivo: string;
                export const CodAulaIdfTipoAtividade: string;
                export const CodCliente: string;
                export const CodClienteCodBiometria: string;
                export const CodClienteDesCpf: string;
                export const CodClienteDesEndereco: string;
                export const CodClienteDesNome: string;
                export const CodClienteDesRg: string;
                export const CodClienteIdfAdimplente: string;
                export const CodClienteIdfAtivo: string;
                export const CodPlano: string;
                export const CodPlanoDesNome: string;
                export const CodPlanoIdfAivo: string;
                export const CodPlanoIdfTipo: string;
                export const CodRegistro: string;
                export const DatAula: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    GymAction['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Aula:{Aula:{CodAula:1,DesAula:1,IdfAtivo:1,IdfTipoAtividade:1}},AulaInstrutor:{AulaInstrutor:{CodAula:1,CodAulaDesAula:1,CodAulaIdfAtivo:1,CodAulaIdfTipoAtividade:1,CodInstrutor:1,CodInstrutorDesCpf:1,CodInstrutorDesNome:1,CodInstrutorDesRg:1,CodInstrutorIdfAtivo:1,CodInstrutorIdfTipoAtividade:1,CodRegistro:1,DesSala:1,HorFim:1,HorInicio:1,IdfDomingo:1,IdfQuarta:1,IdfQuinta:1,IdfSabado:1,IdfSegunda:1,IdfSexta:1,IdfTerca:1}},AvaliacaoFisica:{AvaliacaoFisica:{CodAvaliacaoFisica:1,CodCliente:1,CodClienteCodBiometria:1,CodClienteDesCpf:1,CodClienteDesEndereco:1,CodClienteDesNome:1,CodClienteDesRg:1,CodClienteIdfAdimplente:1,CodClienteIdfAtivo:1,CodFisioterapeuta:1,CodFisioterapeutaDesNome:1,CodFisioterapeutaIdfAtivo:1,DatAvaliacao:1,DesAnamnese:1,DesExameDobras:1,DesExameErgometrico:1}},Cliente:{Cliente:{CodBiometria:1,CodCliente:1,DesCpf:1,DesEndereco:1,DesNome:1,DesRg:1,IdfAdimplente:1,IdfAtivo:1}},ClientePlanoAula:{ClientePlanoAula:{Aula:1,AulaDesAula:1,AulaIdfAtivo:1,AulaIdfTipoAtividade:1,Cliente:1,ClienteCodBiometria:1,ClienteDesCpf:1,ClienteDesEndereco:1,ClienteDesNome:1,ClienteDesRg:1,ClienteIdfAdimplente:1,ClienteIdfAtivo:1,CodRegistro:1,Plano:1,PlanoDesNome:1,PlanoIdfAivo:1,PlanoIdfTipo:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Ferias:{Ferias:{CodAula:1,CodAulaDesAula:1,CodAulaIdfAtivo:1,CodAulaIdfTipoAtividade:1,CodCliente:1,CodClienteCodBiometria:1,CodClienteDesCpf:1,CodClienteDesEndereco:1,CodClienteDesNome:1,CodClienteDesRg:1,CodClienteIdfAdimplente:1,CodClienteIdfAtivo:1,CodFerias:1,CodPlano:1,CodPlanoDesNome:1,CodPlanoIdfAivo:1,CodPlanoIdfTipo:1,DatFim:1,DatInicio:1}},Fisioterapeuta:{Fisioterapeuta:{CodFisioterapeuta:1,DesNome:1,IdfAtivo:1}},Instrutor:{Instrutor:{CodInstrutor:1,DesCpf:1,DesNome:1,DesRg:1,IdfAtivo:1,IdfTipoAtividade:1}},Pagamento:{Pagamento:{CodAula:1,CodAulaDesAula:1,CodAulaIdfAtivo:1,CodAulaIdfTipoAtividade:1,CodCliente:1,CodClienteCodBiometria:1,CodClienteDesCpf:1,CodClienteDesEndereco:1,CodClienteDesNome:1,CodClienteDesRg:1,CodClienteIdfAdimplente:1,CodClienteIdfAtivo:1,CodPagamento:1,CodPlano:1,CodPlanoDesNome:1,CodPlanoIdfAivo:1,CodPlanoIdfTipo:1,DatPagamento:1,DatVencimento:1,VlrPago:1}},Plano:{Plano:{CodPlano:1,DesNome:1,IdfAivo:1,IdfTipo:1}},PlanoAula:{PlanoAula:{CodAula:1,CodAulaDesAula:1,CodAulaIdfAtivo:1,CodAulaIdfTipoAtividade:1,CodPlano:1,CodPlanoDesNome:1,CodPlanoIdfAivo:1,CodPlanoIdfTipo:1,CodRegistro:1,VlrAula:1}},RegistroAula:{RegistroAula:{CodAula:1,CodAulaDesAula:1,CodAulaIdfAtivo:1,CodAulaIdfTipoAtividade:1,CodCliente:1,CodClienteCodBiometria:1,CodClienteDesCpf:1,CodClienteDesEndereco:1,CodClienteDesNome:1,CodClienteDesRg:1,CodClienteIdfAdimplente:1,CodClienteIdfAtivo:1,CodPlano:1,CodPlanoDesNome:1,CodPlanoIdfAivo:1,CodPlanoIdfTipo:1,CodRegistro:1,DatAula:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
