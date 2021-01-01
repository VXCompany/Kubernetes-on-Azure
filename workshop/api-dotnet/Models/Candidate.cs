using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api_dotnet.Models
{
    public class Candidate
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public String id { get; set; }

        public String name { get; set; }
        public String avatar { get; set; }
        public String[] props { get; set; }
    }
}
