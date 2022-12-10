import { MenuComponent } from './component/menu/menu.component';
import { VeiculosComponent } from './component/veiculos/veiculos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'exercicio5',
    component: VeiculosComponent
  },
  {
    path: '',
    component: MenuComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
