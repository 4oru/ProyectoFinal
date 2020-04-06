using System;
using System.Collections.Generic;
using System.Text;
using Model;
using Microsoft.EntityFrameworkCore;


namespace Persistence
{   
    public class InventarioDbContext : DbContext
    {
        public DbSet<Inventario> Inventario { get; set; }

        public InventarioDbContext(DbContextOptions options)
        : base(options)
        { }
    }
}

