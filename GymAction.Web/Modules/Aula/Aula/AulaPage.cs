
namespace GymAction.Aula.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AulaRow))]
    public class AulaController : Controller
    {
        [Route("Aula/Aula")]
        public ActionResult Index()
        {
            return View("~/Modules/Aula/Aula/AulaIndex.cshtml");
        }
    }
}