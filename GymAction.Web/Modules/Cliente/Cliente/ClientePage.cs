
namespace GymAction.Cliente.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ClienteRow))]
    public class ClienteController : Controller
    {
        [Route("Cliente/Cliente")]
        public ActionResult Index()
        {
            return View("~/Modules/Cliente/Cliente/ClienteIndex.cshtml");
        }
    }
}