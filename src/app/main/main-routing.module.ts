import { ProductsComponent } from './products/products.component';
import { PeopleComponent } from './people/people.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'people'},
  { path: 'products', component: ProductsComponent },
  { path: 'people', component: PeopleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
