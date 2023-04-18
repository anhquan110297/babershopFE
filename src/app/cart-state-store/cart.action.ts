import {createAction, props} from "@ngrx/store";
import {Product} from "../product/entity/product";

export const addProduct = createAction('add action',props<Product>())
export const removeProduct = createAction('remove action', props<Product>())
export const clearCart = createAction('Clear cart')
