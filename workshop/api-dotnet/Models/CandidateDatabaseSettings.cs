namespace api_dotnet.Models
{
    public class CandidateDatabaseSettings : ICandidateDatabaseSettings
    {

        public string Server { get; set; }
        public int Port { get; set; }
        public string DatabaseName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string CollectionName { get; set; }
    }

    public interface ICandidateDatabaseSettings
    {
        string Server { get; set; }
        int Port { get; set; }
        string DatabaseName { get; set; }
        string Username { get; set; }
        string Password { get; set; }
        string CollectionName { get; set; }
    }
}
