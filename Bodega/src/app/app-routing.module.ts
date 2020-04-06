import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },

  {
    path: 'crear',
    loadChildren: () => import('./inventario-crear/inventario-crear.module').then( m => m.InventarioCrearPageModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./inventario-editar/inventario-editar.module').then( m => m.InventarioEditarPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./inventario-listar/inventario-listar.module').then( m => m.InventarioListarPageModule) 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
