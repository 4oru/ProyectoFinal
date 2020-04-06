import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioCrearPage } from './inventario-crear.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioCrearPageRoutingModule {}
