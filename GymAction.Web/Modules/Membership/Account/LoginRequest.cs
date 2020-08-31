
namespace GymAction.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow), CheckNames = true)]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("Digite seu usuário...")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("Digite sua senha..."), Required(true)]
        public string Password { get; set; }
    }
}