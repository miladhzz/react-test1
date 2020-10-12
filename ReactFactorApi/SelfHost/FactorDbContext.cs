using SelfHost.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SelfHost
{
    public class FactorDbContext : DbContext
    {
        private static string ConnectionString = "Server=.;Database=FactorDb;UID=sa;PWD=123456789*;MultipleActiveResultSets=true;";

        public FactorDbContext(): base(ConnectionString)
        {
        }

        public DbSet<Factor> Factors { get; set; }
    }
}
