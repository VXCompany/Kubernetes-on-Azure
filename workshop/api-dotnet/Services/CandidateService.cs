using api_dotnet.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace api_dotnet.Services
{
    public class CandidateService
    {
        private readonly IMongoCollection<Candidate> _candidates;

        public CandidateService(ICandidateDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _candidates = database.GetCollection<Candidate>(settings.CollectionName);
        }

        public List<Candidate> Get() =>
            _candidates.Find(candidate => true).ToList();
    }
}
