namespace VoluntaryDisclosure.Domain
{
    public class Disclosure
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public bool CriminalRecord { get; set; }
        public bool RedsBankingDbListed { get; set; }
        public bool NegativeCreditListing { get; set; }
        public bool PerformanceManagementPlaced { get; set; }
        public bool EthicalIndustringRestriction { get; set; }
        public DateTime CreateDate { get; set; }
    }
}