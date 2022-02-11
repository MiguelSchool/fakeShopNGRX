import {createAction, props} from "@ngrx/store";
import {SingleProductActionTypes} from "../actionTypes/singleProductActionTypes";
import {ProductInterface} from "../../shared/types/ProductInterface";

export const singleProductAction = createAction(
  SingleProductActionTypes.SINGLE_PRODUCT_ACTION,
  props<{ id:number }>()
);

export const singleProductSuccessAction = createAction(
  SingleProductActionTypes.SINGLE_PRODUCT_ACTION_SUCCESS,
  props<{ product: ProductInterface }>()
);

export const singleProductFailureAction = createAction(
  SingleProductActionTypes.SINGLE_PRODUCT_ACTION_FAILURE
)
