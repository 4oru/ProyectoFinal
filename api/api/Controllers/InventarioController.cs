using Microsoft.AspNetCore.Mvc;
using Model;
using Service;

namespace api.Controllers
{
    [Route("/")]
    public class InventarioController : Controller
    {
        private readonly IInventarioService _inventarioService;

        public InventarioController(IInventarioService inventarioService)
        {
            _inventarioService = inventarioService;
        }

        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(
                _inventarioService.GetAll()
            );
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(
                _inventarioService.Get(id)
            );
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] Inventario model)
        {
            return Ok(
                _inventarioService.Add(model)
            );
        }

        // PUT api/values/5
        [HttpPost("{id}")]
        public IActionResult Put([FromBody] Inventario model)
        {
            return Ok(
                _inventarioService.Update(model)
            );
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(
                _inventarioService.Delete(id)
            );
        }
    }
}