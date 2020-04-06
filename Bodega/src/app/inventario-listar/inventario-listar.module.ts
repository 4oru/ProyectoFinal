import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioListarPageRoutingModule } from './inventario-listar-routing.module';

import { InventarioListarPage } from './inventario-listar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioListarPageRoutingModule
  ],
  declarations: [InventarioListarPage]
})
export class InventarioListarPageModule {}
