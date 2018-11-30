using Microsoft.EntityFrameworkCore.Migrations;

namespace CasaDoCodigo.Migrations
{
    public partial class CodigoProdutoUnico : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Produto_Codigo",
                table: "Produto",
                column: "Codigo",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Produto_Codigo",
                table: "Produto");
        }
    }
}
