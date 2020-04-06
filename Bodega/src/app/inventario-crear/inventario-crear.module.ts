import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioCrearPageRoutingModule } from './inventario-crear-routing.module';

import { InventarioCrearPage } from './inventario-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioCrearPageRoutingModule
  ],
  declarations: [InventarioCrearPage]
})
export class InventarioCrearPageModule {}
