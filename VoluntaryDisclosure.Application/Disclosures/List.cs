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
    public class List
    {
        public class Query:IRequest<Result<List<Disclosure>>>
        {
            public DisclosureParams DisclosureParams { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<List<Disclosure>>>
        {
            private readonly VoluntaryDisclosureDataContext context;

            public Handler(VoluntaryDisclosureDataContext context)
            {
                this.context = context;
            }

            public async Task<Result<List<Disclosure>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var search = request.DisclosureParams == null ? "" :
                    request.DisclosureParams.Name;
                var query = await context.Disclosures.Where(x =>
                    string.IsNullOrEmpty(search)? true : (x.FullName.Contains(search) || x.Email.Contains(search))
                    ).ToListAsync();
                return Result<List<Disclosure>>.Success(query);
            }
        }
    }
}
