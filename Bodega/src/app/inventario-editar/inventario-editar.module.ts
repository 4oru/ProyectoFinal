import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioEditarPageRoutingModule } from './inventario-editar-routing.module';

import { InventarioEditarPage } from './inventario-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioEditarPageRoutingModule
  ],
  declarations: [InventarioEditarPage]
})
export class InventarioEditarPageModule {}
