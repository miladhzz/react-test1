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
    }
   
}
