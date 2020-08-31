
namespace GymAction.ClientePlanoAula.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ClientePlanoAulaRow))]
    public class ClientePlanoAulaController : Controller
    {
        [Route("ClientePlanoAula/ClientePlanoAula")]
        public ActionResult Index()
        {
            return View("~/Modules/ClientePlanoAula/ClientePlanoAula/ClientePlanoAulaIndex.cshtml");
        }
    }
}