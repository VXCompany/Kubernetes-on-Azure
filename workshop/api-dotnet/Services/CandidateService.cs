using api_dotnet.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;

namespace api_dotnet.Services
{
    public class CandidateService
    {
        private readonly IMongoCollection<Candidate> _candidates;

        public CandidateService(ICandidateDatabaseSettings settings)
        {

            var options = new MongoClientSettings
            {
                Server = new MongoServerAddress(settings.Server, settings.Port)
            };

            if (!string.IsNullOrEmpty(settings.Username))
            {
                options.Credential = MongoCredential.CreateCredential(settings.DatabaseName, settings.Username, settings.Password);
            }

            var client = new MongoClient(options);
            var database = client.GetDatabase(settings.DatabaseName);

            _candidates = database.GetCollection<Candidate>(settings.CollectionName);
        }

        public List<Candidate> Get() =>
            _candidates.Find(candidate => true).ToList();

        public Candidate GetNextmatch()
        {
            var rand = new Random();
            var list = _candidates.Find(candidate => true).ToList();

            return list[rand.Next(list.Count)];
        }
    }
}
