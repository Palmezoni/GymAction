
namespace GymAction.Ferias.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.FeriasRow))]
    public class FeriasController : Controller
    {
        [Route("Ferias/Ferias")]
        public ActionResult Index()
        {
            return View("~/Modules/Ferias/Ferias/FeriasIndex.cshtml");
        }
    }
}