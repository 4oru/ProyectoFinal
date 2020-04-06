import { Component, OnInit } from '@angular/core';
import { Inventario } from '../modelos/inventario';
import { ApiService } from '../servicios/api.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-inventario-crear',
  templateUrl: './inventario-crear.page.html',
  styleUrls: ['./inventario-crear.page.scss'],
})
export class InventarioCrearPage implements OnInit {
 
  data: Inventario
 
  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Inventario();
  }
 
  ngOnInit() {
  }
 
  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      console.log(response);
      this.router.navigateByUrl('/listar');
    });
 
  }
}
 