using Microsoft.Owin.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace SelfHost
{
    class Program
    {
        static void Main(string[] args)
        {
            var url = "http://localhost:3001";

            using (WebApp.Start<Startup>(url))
            {
                Console.WriteLine("webserver running in address:" + url);
                Console.WriteLine("pree any key to quit");
                Console.ReadLine();
            }
        }

    }
}
