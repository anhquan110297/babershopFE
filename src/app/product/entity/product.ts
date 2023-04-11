import {Category} from "./category";

export interface Product {
  id : number,
  name : string,
  type? : string,
  img : string,
  price : number,
  category : Category
}
