
namespace GymAction.Plano.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PlanoRow))]
    public class PlanoController : Controller
    {
        [Route("Plano/Plano")]
        public ActionResult Index()
        {
            return View("~/Modules/Plano/Plano/PlanoIndex.cshtml");
        }
    }
}