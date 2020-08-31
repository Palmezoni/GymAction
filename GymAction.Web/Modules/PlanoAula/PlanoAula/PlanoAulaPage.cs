
namespace GymAction.PlanoAula.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PlanoAulaRow))]
    public class PlanoAulaController : Controller
    {
        [Route("PlanoAula/PlanoAula")]
        public ActionResult Index()
        {
            return View("~/Modules/PlanoAula/PlanoAula/PlanoAulaIndex.cshtml");
        }
    }
}