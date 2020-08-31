
namespace GymAction.Fisioterapeuta.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.FisioterapeutaRow))]
    public class FisioterapeutaController : Controller
    {
        [Route("Fisioterapeuta/Fisioterapeuta")]
        public ActionResult Index()
        {
            return View("~/Modules/Fisioterapeuta/Fisioterapeuta/FisioterapeutaIndex.cshtml");
        }
    }
}