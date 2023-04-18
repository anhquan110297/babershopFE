import {Component, HostListener, OnInit} from '@angular/core';
import {Product} from "../../product/entity/product";
import {Store} from "@ngrx/store";
import {ProductGroup, selectProductList, selectTotalPrice} from "../../cart-state-store/cart.selector";
import {Observable} from "rxjs";
import {addProduct, clearCart, removeProduct} from "../../cart-state-store/cart.action";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  readonly SCROLL_TRIGGER = 100;
  isScroll: boolean;
  totalPrice : Observable<number> | undefined;
  productList: Observable<ProductGroup[]>;

  constructor(private store: Store) {
    this.productList = store.select(selectProductList);
    this.totalPrice = store.select(selectTotalPrice);
    this.isScroll = false;
  }



  ngOnInit(): void {
  }


  @HostListener('window:scroll', [`$event`])
  onScrollEvent() {
    if (window.scrollY >= this.SCROLL_TRIGGER) {
      this.isScroll = true;
      // @ts-ignore
      document.querySelector('.header-logo').src = 'assets/img/black-logo.png';
    } else {
      this.isScroll = false;
      // @ts-ignore
      document.querySelector('.header-logo').src = 'assets/img/white-logo.png';
    }
  }

  ngAfterViewInit() {
  }

  less(product: Product) {
    this.store.dispatch(removeProduct(product));
  }

  more(product: Product) {
    this.store.dispatch(addProduct(product));

  }

  clearCart() {
    this.store.dispatch(clearCart());
  }
}
