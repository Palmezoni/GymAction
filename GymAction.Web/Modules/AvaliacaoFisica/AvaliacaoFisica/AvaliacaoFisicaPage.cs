
namespace GymAction.AvaliacaoFisica.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AvaliacaoFisicaRow))]
    public class AvaliacaoFisicaController : Controller
    {
        [Route("AvaliacaoFisica/AvaliacaoFisica")]
        public ActionResult Index()
        {
            return View("~/Modules/AvaliacaoFisica/AvaliacaoFisica/AvaliacaoFisicaIndex.cshtml");
        }
    }
}