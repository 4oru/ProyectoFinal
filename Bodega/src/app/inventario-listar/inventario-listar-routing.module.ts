import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioListarPage } from './inventario-listar.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioListarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioListarPageRoutingModule {}
