namespace api_dotnet.Models
{
    public class CandidateDatabaseSettings : ICandidateDatabaseSettings
    {
        public string CollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface ICandidateDatabaseSettings
    {
        string CollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
