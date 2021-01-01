using api_dotnet.Models;
using api_dotnet.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace api_dotnet.Controllers
{
    [Route("candidates")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly CandidateService _candidateService;

        public CandidateController(CandidateService candidateService)
        {
            _candidateService = candidateService;
        }

        [HttpGet]
        public ActionResult<List<Candidate>> Get() =>
            _candidateService.Get();

       
    }
}
