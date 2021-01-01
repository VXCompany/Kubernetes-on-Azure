using api_dotnet.Models;
using api_dotnet.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace api_dotnet.Controllers
{
    [Route("")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly CandidateService _candidateService;

        public CandidateController(CandidateService candidateService)
        {
            _candidateService = candidateService;
        }

        [HttpGet]
        [Route("candidates")]
        public ActionResult<List<Candidate>> Get()
        {
            return _candidateService.Get();
        }

        [HttpGet]
        [Route("candidates/match")]
        public ActionResult<Candidate> GetNextMatch()
        {
            return _candidateService.GetNextmatch();
        }
    }
}
