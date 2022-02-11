import {createAction, props} from "@ngrx/store";
import {FilterProductCategoryActionTypes} from "../actionTypes/filterProductCategoryActionTypes";
import {CategoryInterface} from "../../shared/types/CategoryInterface";
import {ProductInterface} from "../../shared/types/ProductInterface";

export const filterProductsAction = createAction(
  FilterProductCategoryActionTypes.PRODUCT_FILTER_ACTION,
  props<{category: CategoryInterface}>()
);

export const filterProductsSuccessAction = createAction(
  FilterProductCategoryActionTypes.PRODUCT_FILTER_SUCCESS,
  props<{products: ProductInterface[]}>()
);

export const filterProductsFailureAction = createAction(
  FilterProductCategoryActionTypes.PRODUCT_FILTER_FAILURE
);
