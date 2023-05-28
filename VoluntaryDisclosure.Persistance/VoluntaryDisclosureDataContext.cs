using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using VoluntaryDisclosure.Domain;

namespace VoluntaryDisclosure.Persistance
{
    public class VoluntaryDisclosureDataContext:DbContext
    {
        public VoluntaryDisclosureDataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Disclosure> Disclosures { get; set; }
    }
}