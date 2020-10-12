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
            using (WebApp.Start<Startup>("http://localhost:3001"))
            {
                Console.WriteLine("webserver running");
                Console.WriteLine("pree any key to quit");
                Console.ReadLine();
            }
        }

    }
}
