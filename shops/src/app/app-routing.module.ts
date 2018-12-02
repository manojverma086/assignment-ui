import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopsComponent } from './shops/shops.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
  { path: 'shops', component: ShopsComponent },
  { path: 'shops/create', component: ShopsComponent },
  { path: 'shops/:shopid/products', component: ProductsComponent },
  { path: 'shops/:shopid/products/create', component: ProductsComponent },
  { path: 'shops/:shopid/products/:id/update', component: ProductsComponent },
  { path: '', redirectTo: 'shops', pathMatch: null},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
