using MediatR;
using Microsoft.EntityFrameworkCore;
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
    public class Details
    {
        public class Query:IRequest<Result<Disclosure>>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Disclosure>>
        {
            private readonly VoluntaryDisclosureDataContext context;

            public Handler(VoluntaryDisclosureDataContext context)
            {
                this.context = context;
            }
            public async Task<Result<Disclosure>> Handle(Query request, CancellationToken cancellationToken)
            {
                var model = await context.Disclosures.FirstOrDefaultAsync(x =>
                    x.Id == request.Id);
                return Result<Disclosure>.Success(model);
            }
        }
    }
}
