using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using VoluntaryDisclosure.Application.Disclosures;
using VoluntaryDisclosure.Domain;

namespace VoluntaryDisclosure.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DisclosuresController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetDisclosures([FromQuery] DisclosureParams searchParams)
        {
            var result = await mediator.Send(new List.Query() { DisclosureParams = searchParams });
            return HandleResult(result);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Disclosure disclosure)
        {
            var result = await mediator.Send(new Create.Command() { Disclosure = disclosure });
            return HandleResult(result);
        }
    }
}
