
namespace GymAction.AulaInstrutor.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AulaInstrutorRow))]
    public class AulaInstrutorController : Controller
    {
        [Route("AulaInstrutor/AulaInstrutor")]
        public ActionResult Index()
        {
            return View("~/Modules/AulaInstrutor/AulaInstrutor/AulaInstrutorIndex.cshtml");
        }
    }
}