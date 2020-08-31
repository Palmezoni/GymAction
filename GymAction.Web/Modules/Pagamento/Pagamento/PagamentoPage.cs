
namespace GymAction.Pagamento.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PagamentoRow))]
    public class PagamentoController : Controller
    {
        [Route("Pagamento/Pagamento")]
        public ActionResult Index()
        {
            return View("~/Modules/Pagamento/Pagamento/PagamentoIndex.cshtml");
        }
    }
}