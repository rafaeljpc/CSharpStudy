using CasaDoCodigo.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CasaDoCodigo.Repositories
{
    public class ProdutoRepository : BaseRepository<Produto>, IProdutoRepository
    {
        public ProdutoRepository(ApplicationContext context) : base(context)
        {
        }

        public IList<Produto> GetProdutos()
        {
            return context.Set<Produto>().ToList();
        }

        public void SaveProdutos(List<Livro> livros)
        {
            foreach (var item in livros)
            {
                
                bool hasAny = dbSet.Where(p => p.Codigo == item.Codigo).Any();
                if (!hasAny)
                {
                    dbSet.Add(new Produto(
                        codigo: item.Codigo,
                        nome: item.Nome,
                        preco: item.Preco
                    ));
                }
            }
            context.SaveChanges();
        }
    }

    public class Livro
    {
        public string Codigo { get; set; }
        public string Nome { get; set; }
        public decimal Preco { get; set; }

        public override string ToString()
        {
            return $"{{Codigo: {Codigo}, Nome: {Nome}, Preco: {Preco}}}";
        }
    }
}
