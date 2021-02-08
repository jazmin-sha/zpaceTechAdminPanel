import { Injectable } from '@angular/core';
import { Product } from '../product';
import { productList } from '../product-data';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  public product = productList;
  public getProduct(): Product[] {
      return this.product;
  }

  constructor() { }
}
