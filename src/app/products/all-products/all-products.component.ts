import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { productList } from '../product-data';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  productList: Product[] = [];
  selectedCategory = 'All';

  constructor(private productService: ProductServiceService) {
    this.productList = this.productService.getProduct();
   }

  ngOnInit(): void {
  }

}
