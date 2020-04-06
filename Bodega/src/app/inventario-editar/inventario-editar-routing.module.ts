import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarioEditarPage } from './inventario-editar.page';

const routes: Routes = [
  {
    path: '',
    component: InventarioEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioEditarPageRoutingModule {}
