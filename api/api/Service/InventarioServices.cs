using Microsoft.EntityFrameworkCore;
using Model;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Service
{
    public interface IInventarioService
    {
        IEnumerable<Inventario> GetAll();
        bool Add(Inventario model);
        bool Delete(int id);
        bool Update(Inventario model);
        Inventario Get(int id);
    }

    public class InventarioService : IInventarioService
    {
        private readonly InventarioDbContext _inventarioDbContext;

        public InventarioService(
            InventarioDbContext inventarioDbContext
        )
        {
            _inventarioDbContext = inventarioDbContext;
        }

        public IEnumerable<Inventario> GetAll()
        {
            var result = new List<Inventario>();

            try
            {
                result = _inventarioDbContext.Inventario.ToList();
            }
            catch (System.Exception)
            {

            }

            return result;
        }

        public Inventario Get(int id)
        {
            var result = new Inventario();

            try
            {
                result = _inventarioDbContext.Inventario.Single(x => x.IdProducto == id);
            }
            catch (System.Exception)
            {

            }

            return result;
        }

        public bool Add(Inventario model)
        {
            try
            {
                _inventarioDbContext.Add(model);
                _inventarioDbContext.SaveChanges();
            }
            catch (System.Exception)
            {
                return false;
            }

            return true;
        }

        public bool Update(Inventario model)
        {
            try
            {
                var originalModel = _inventarioDbContext.Inventario.Single(x =>
                    x.IdProducto == model.IdProducto
                );

                originalModel.Nombre = model.Nombre;
                originalModel.Precio = model.Precio;
                originalModel.Descripcion = model.Descripcion;
                originalModel.Stock = model.Stock;

                _inventarioDbContext.Update(originalModel);
                _inventarioDbContext.SaveChanges();
            }
            catch (System.Exception)
            {
                return false;
            }

            return true;
        }

        public bool Delete(int id)
        {
            try
            {
                _inventarioDbContext.Entry(new Inventario { IdProducto = id }).State = EntityState.Deleted; ;
                _inventarioDbContext.SaveChanges();
            }
            catch (System.Exception)
            {
                return false;
            }

            return true;
        }
    }
}