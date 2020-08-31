
namespace GymAction.Instrutor.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.InstrutorRow))]
    public class InstrutorController : Controller
    {
        [Route("Instrutor/Instrutor")]
        public ActionResult Index()
        {
            return View("~/Modules/Instrutor/Instrutor/InstrutorIndex.cshtml");
        }
    }
}