
namespace GymAction.RegistroAula.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.RegistroAulaRow))]
    public class RegistroAulaController : Controller
    {
        [Route("RegistroAula/RegistroAula")]
        public ActionResult Index()
        {
            return View("~/Modules/RegistroAula/RegistroAula/RegistroAulaIndex.cshtml");
        }
    }
}