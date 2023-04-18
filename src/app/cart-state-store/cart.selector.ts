import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Product} from "../product/entity/product";
import {Category} from "../product/entity/category";

export interface ProductGroup {
  product: Product;
  count: number;
}

export const selectCountProducts = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    return state.length
  }
);

export const selectTotalPrice = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    let totalPrice = 0;
    state.forEach(p => totalPrice += p.price)
    return totalPrice;
  }
);
export const selectProductList = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    let productMap: Map<number, ProductGroup> = new Map;
    state.forEach(s => {
      let value = productMap.get(s.id);
      if (value) {
        (value as ProductGroup).count++;
      } else {
        productMap.set(s.id,{product : s, count : 1})
      }
    })
    return Array.from(productMap.values());
  }
);
