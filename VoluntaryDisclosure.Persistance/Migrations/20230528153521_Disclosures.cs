using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VoluntaryDisclosure.Persistance.Migrations
{
    /// <inheritdoc />
    public partial class Disclosures : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Disclosures",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CriminalRecord = table.Column<bool>(type: "bit", nullable: false),
                    RedsBankingDbListed = table.Column<bool>(type: "bit", nullable: false),
                    NegativeCreditListing = table.Column<bool>(type: "bit", nullable: false),
                    PerformanceManagementPlaced = table.Column<bool>(type: "bit", nullable: false),
                    EthicalIndustringRestriction = table.Column<bool>(type: "bit", nullable: false),
                    CreateDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Disclosures", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Disclosures");
        }
    }
}
