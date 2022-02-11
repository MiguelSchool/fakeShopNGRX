import {AuthStateInterface} from "../../auth/types/AuthStateInterface";
import {CategoryStateInterface} from "../../home/shared/types/CategoryStateInterface";
import {ProductStateInterface, SingleProductStateInterface} from "../../home/shared/types/ProductStateInterface";

export interface AppStateInterface {
  auth: AuthStateInterface;
  category: CategoryStateInterface;
  product: ProductStateInterface;
  singleProduct: SingleProductStateInterface;
}
