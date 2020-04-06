import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventario } from '../modelos/inventario';
import { ApiService } from '../servicios/api.service';
 
@Component({
  selector: 'app-inventario-editar',
  templateUrl: './inventario-editar.page.html',
  styleUrls: ['./inventario-editar.page.scss'],
})
export class InventarioEditarPage implements OnInit {
 
 
  id: number;
  data: Inventario;
 
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Inventario();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //obtener detalles segun id del producto
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }
 
  update() {
    //Actualizar producto tomando el Id y actualizando los datos del objeto
    
    this.apiService.updateItem(this.id, this.data).subscribe(response => {
      console.log(this.id);
      this.router.navigate(['/listar']);
    })
  }
 
}