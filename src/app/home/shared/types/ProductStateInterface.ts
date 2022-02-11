import {ProductInterface} from "./ProductInterface";
import {BackendErrorsInterface} from "../../../shared/types/BackendErrorsInterface";

export interface ProductStateInterface {
  data: ProductInterface[] | null;
  isLoading: boolean;
  error: BackendErrorsInterface  | null;
  isSubmitting: boolean;
}

export interface SingleProductStateInterface {
  data: ProductInterface | null;
  isLoading: boolean;
  error: BackendErrorsInterface  | null;
  isSubmitting: boolean;
}
