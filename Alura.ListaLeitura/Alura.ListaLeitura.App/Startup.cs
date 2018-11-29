using Alura.ListaLeitura.App.Negocio;
using Alura.ListaLeitura.App.Repositorio;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Alura.ListaLeitura.App
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRouting();
        }


        public void Configure(IApplicationBuilder app)
        {
            var builder = new RouteBuilder(app);
            builder.MapRoute("livros/lendo", ImprimirLivrosLendo);
            builder.MapRoute("livros/lidos", ImprimirLivrosLidos);
            builder.MapRoute("livros/paraler", ImprimirLivrosParaLer);
            builder.MapRoute("livros/novo/{nome}/{autor}", CadastroNovoLivro);
            builder.MapRoute("livros/detalhe/{id:int}", ExibirDetalheLivro);

            app.UseRouter(builder.Build());
        }

        private Task ExibirDetalheLivro(HttpContext context)
        {
            int id = Convert.ToInt32(context.GetRouteValue("id") + "");
            var repo = new LivroRepositorioCSV();
            var livro = repo.Todos.FirstOrDefault(l => l.Id == id);
            if (livro == null)
            {
                context.Response.StatusCode = 404;
                return context.Response.WriteAsync($"livro {id} não encontrado");
            }
                

            string output = livro.Detalhes();

            return context.Response.WriteAsync(output);
        }

        private Task CadastroNovoLivro(HttpContext context)
        {
            var livro = new Livro()
            {
                Titulo = context.GetRouteValue("nome") + "",
                Autor = context.GetRouteValue("autor") + "",
            };
            var repo = new LivroRepositorioCSV();
            repo.Incluir(livro);

            return context.Response.WriteAsync($"Livro {livro.Titulo} (de {livro.Autor}) inserido com sucesso");
        }

        private Task ImprimirLivrosParaLer(HttpContext context)
        {
            var repo = new LivroRepositorioCSV();

            return context.Response.WriteAsync(repo.ParaLer.ToString());
        }

        private Task ImprimirLivrosLidos(HttpContext context)
        {
            var repo = new LivroRepositorioCSV();

            return context.Response.WriteAsync(repo.Lidos.ToString());
        }

        private Task ImprimirLivrosLendo(HttpContext context)
        {
            var repo = new LivroRepositorioCSV();

            return context.Response.WriteAsync(repo.Lendo.ToString());
        }

        public Task CaminhoError(HttpContext context)
        {
            context.Response.StatusCode = 404;
            return context.Response.WriteAsync("error, caminho nao encontrado");
        }
    }
}