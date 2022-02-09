import {createAction, props} from "@ngrx/store";
import {ProductActionTypes} from "../actionTypes/productActionTypes";
import {ProductInterface} from "../../shared/types/ProductInterface";
import {BackendErrorsInterface} from "../../../shared/types/BackendErrorsInterface";

export const getProductAction = createAction(
  ProductActionTypes.PRODUCT_ACTION
);

export const getProductActionSuccess = createAction(
  ProductActionTypes.PRODUCT_ACTION_SUCCESS,
  props<{products: ProductInterface[]}>()
);

export const getProductActionFailure = createAction(
  ProductActionTypes.PRODUCT_ACTION_FAILURE,
  props<{error: BackendErrorsInterface}>()
);
