import { Injectable } from '@angular/core';
import {Product} from "../product/entity/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart : Product[] | undefined ;

  constructor() { }

  getCart(): any {
    return this.cart;
  }

  setCart(value: Product[]) {
    this.cart = value;
  }
}
