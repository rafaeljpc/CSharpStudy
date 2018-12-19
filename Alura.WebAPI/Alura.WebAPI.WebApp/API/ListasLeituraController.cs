using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Alura.ListaLeitura.Persistencia;
using Lista = Alura.ListaLeitura.Modelos.ListaLeitura;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Alura.ListaLeitura.Modelos;
using Microsoft.AspNetCore.Authorization;

namespace Alura.WebAPI.WebApp.API
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ListasLeituraController : ControllerBase
    {
        private readonly IRepository<Livro> _repo;

        public ListasLeituraController(IRepository<Livro> repo)
        {
            _repo = repo;
        }

        private Lista CriaLista(TipoListaLeitura tipo)
        {
            return new Lista
            {
                Tipo = tipo.ParaString(),
                Livros = _repo.All
                    .Where(l => l.Lista == tipo)
                    .Select(i => i.ToApi())
                    .ToList()
            };
        }

        [HttpGet]
        public IActionResult TodasListas()
        {
            Lista paraLer = CriaLista(TipoListaLeitura.ParaLer);
            Lista lendo = CriaLista(TipoListaLeitura.Lendo);
            Lista lidos = CriaLista(TipoListaLeitura.Lidos);
            return Ok(new List<Lista>() { paraLer, lendo, lidos});
        }

        [HttpGet("{tipo}")]
        public IActionResult RecuperaLista(TipoListaLeitura tipo)
        {
            return Ok(CriaLista(tipo));
        }
    }
}