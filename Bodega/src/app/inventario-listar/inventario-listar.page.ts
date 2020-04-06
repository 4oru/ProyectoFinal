import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-inventario-listar',
  templateUrl: './inventario-listar.page.html',
  styleUrls: ['./inventario-listar.page.scss'],
})
export class InventarioListarPage implements OnInit {
 
  inventarioDatos: any;
 
  constructor(
    public apiService: ApiService,
    private plt: Platform
  ) {
    this.inventarioDatos = [];
    this.plt.ready().then(() => {
      this.getAllProducts();
    });
  }
 
  ngOnInit() {
    this.getAllProducts();
  }
  
  ionViewWillEnter()
  {
    this.getAllProducts();
  }

  getAllProducts() {
    //Obtener todos los productos y guardarlos
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.inventarioDatos = response;
    })
  }
 
 
  delete(id) {
    //Borrar item del producto
    this.apiService.deleteItem(id).subscribe(response => {
      console.log(id);
      this.getAllProducts();
    });
  }
 
}