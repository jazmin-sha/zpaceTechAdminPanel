import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { AllProductsComponent } from './all-products/all-products.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'product_list',
        component: MainComponent,
        // data: {
        //   title: 'Dashboard 1',
        //   urls: [
        //     { title: 'Dashboard', url: '/dashboard' },
        //     { title: 'Dashboard 1' }
        //   ]
        // }
      },
      // {
      //   path: 'all_products',
      //   component: AllProductsComponent,
      //   data: {
      //     title: 'Dashboard 2',
      //     urls: [
      //       { title: 'Dashboard', url: '/dashboard' },
      //       { title: 'Dashboard 2' }
      //     ]
      //   }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
