using SelfHost.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace SelfHost.Controller
{
    public class FactorController : ApiController
    {
        FactorDbContext _factorDbContext;
        public FactorController()
        {
            _factorDbContext = new FactorDbContext();
        }
        public List<Factor> GetFactor()
        {
            return _factorDbContext.Factors.ToList();
        }

        [HttpGet]
        public List<Factor> SearchFactor(string name)
        {
            name = name ?? "";
            return _factorDbContext.Factors.Where(x=>x.Name.StartsWith(name)).ToList();
        }

        [HttpPost]
        public string CreateFactor(List<Factor> factors)
        {
            foreach(var factor in factors)
            {
                factor.Id = 0;
                _factorDbContext.Factors.Add(factor);
            }
            _factorDbContext.SaveChanges();
            
            return "123132132";
        }
    }
   
}
