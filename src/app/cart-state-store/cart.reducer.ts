import {addProduct, removeProduct, clearCart} from "./cart.action";
import {createReducer, on} from "@ngrx/store";
import {Product} from "../product/entity/product";

export const initialCartEntries: Product[] = [];

export const cartReducer = createReducer(
  initialCartEntries,
  //action clear cart
  on(clearCart, _ => []),

  on(addProduct, (entries, product) => {
    const entriesClone: Product[] = [...entries];
    // @ts-ignore
    entriesClone.push(product);
    return entriesClone;
  }),

  on(removeProduct, (entries, product) => {
    const entriesClone: Product[] = [...entries];
    // @ts-ignore
    let found = entries.find(item => item.id === product.id);
    entriesClone.splice(entriesClone.indexOf(found!), 1);
    return entriesClone;
  })
)
