using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VoluntaryDisclosure.Application.Core;
using VoluntaryDisclosure.Domain;
using VoluntaryDisclosure.Persistance;

namespace VoluntaryDisclosure.Application.Disclosures
{
    public class Create
    {
        public class Command: IRequest<Result<Unit>>
        {
            public Disclosure Disclosure { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly VoluntaryDisclosureDataContext context;

            public Handler(VoluntaryDisclosureDataContext context)
            {
                this.context = context;
            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var disclosure = request.Disclosure;
                if(disclosure != null)
                {
                    var model = new Disclosure
                    {
                        FullName = disclosure.FullName,
                        Email = disclosure.Email,
                        CreateDate = DateTime.Now,
                        CriminalRecord = disclosure.CriminalRecord,
                        EthicalIndustringRestriction = disclosure.EthicalIndustringRestriction,
                        NegativeCreditListing = disclosure.NegativeCreditListing,
                        PerformanceManagementPlaced = disclosure.PerformanceManagementPlaced,
                        RedsBankingDbListed = disclosure.RedsBankingDbListed                        
                    };
                    await context.Disclosures.AddAsync(model);
                    var result = await context.SaveChangesAsync() > 0;
                    if (result)
                        return Result<Unit>.Success(Unit.Value);
                }
                return Result<Unit>.Failure($"Failed to create {nameof(Disclosure)}.");
            }
        }
    }
}
