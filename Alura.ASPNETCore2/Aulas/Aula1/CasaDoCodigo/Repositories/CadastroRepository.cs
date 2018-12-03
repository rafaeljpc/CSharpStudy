using CasaDoCodigo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CasaDoCodigo.Repositories
{
    public interface ICadastroRepository {
        Cadastro Update(int cadastroId, Cadastro cadastro);
    }

    public class CadastroRepository : BaseRepository<Cadastro>, ICadastroRepository
    {
        public CadastroRepository(ApplicationContext context) : base(context)
        {
        }

        public Cadastro Update(int cadastroId, Cadastro cadastro)
        {
            var cadastroDb = dbSet.Where(c => c.Id == cadastroId).SingleOrDefault();

            if (cadastroDb == null)
            {
                throw new ArgumentNullException("Cadastro não encontrado", nameof(cadastroId));
            }

            cadastroDb.Update(cadastro);
            context.SaveChanges();
            return cadastroDb;
        }
    }
}
