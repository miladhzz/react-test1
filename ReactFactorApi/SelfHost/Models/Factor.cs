﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SelfHost.Models
{
    public class Factor
    {
        public int Id { get; set; }
        public DateTime Create_date { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}
