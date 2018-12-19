using Alura.ListaLeitura.Modelos;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Alura.ListaLeitura.Persistencia
{
    internal class LivroConfiguration : IEntityTypeConfiguration<Livro>
    {
        public void Configure(EntityTypeBuilder<Livro> builder)
        {
            builder
                .Property(l => l.Titulo)
                .HasMaxLength(50)
                .IsRequired();

            builder
                .Property(l => l.Subtitulo)
                .HasMaxLength(75);

            builder
                .Property(l => l.Resumo)
                .HasMaxLength(500);

            builder
                .Property(l => l.Autor)
                .HasMaxLength(75);

            builder
                .Property(l => l.ImagemCapa);

            builder
                .Property(l => l.Lista)
                .HasMaxLength(10)
                .IsRequired()
                .HasConversion<string>(
                    tipo => tipo.ParaString(),
                    texto => texto.ParaTipo()
                );
        }
    }
}