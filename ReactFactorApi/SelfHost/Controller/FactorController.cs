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
        public List<FactorResponse> GetFactor()
        {
            var result = _factorDbContext.Factors.Select(factor =>            
                new FactorResponse()
                {
                    Id = factor.Id,
                    CreateDate = factor.Create_date
                }).ToList();

            return result;
        }

        [HttpGet]
        public List<FactorResponse> SearchFactor(int? id)
        {
            if (id == null)
            {
                return _factorDbContext.Factors.Select(factor =>
                  new FactorResponse()
                  {
                      Id = factor.Id,
                      CreateDate = factor.Create_date
                  }).ToList();
            }

            var result =  _factorDbContext.Factors.Where(x=>x.Id == id).Select(factor =>
                new FactorResponse()
                {
                    Id = factor.Id,
                    CreateDate = factor.Create_date
                }).ToList();

            return result;
        }

        [HttpPost]
        public string CreateFactor(List<OrderItem> orderItems)
        {
            foreach(var orderItem in orderItems)
            {
                orderItem.Id = 0;               
            }
            var newFactor = new Factor()
            {
                Create_date = DateTime.Now,
                OrderItems = orderItems
            };
            _factorDbContext.Factors.Add(newFactor);
            _factorDbContext.SaveChanges();            
            
            return newFactor.Id.ToString();
        }
    }
   
}
