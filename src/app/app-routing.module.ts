import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from "./body/body.component";
import {ProductComponent} from "./product/product.component";

const routes: Routes = [
  {
    path : '',
    component: BodyComponent,
  }
  ,
  {
    path : 'product',
    component : ProductComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
