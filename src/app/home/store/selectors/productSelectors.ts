import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppStateInterface} from "../../../shared/types/AppStateInterface";
import {ProductStateInterface} from "../../shared/types/ProductStateInterface";

export const actionFeatureSelector = createFeatureSelector<
  AppStateInterface,ProductStateInterface>('product');

export const productIsLoadingSelector = createSelector(
  actionFeatureSelector,
  (productState: ProductStateInterface) => productState.isLoading
);

export const getProductsSelector = createSelector(
  actionFeatureSelector,
  (productState: ProductStateInterface) => productState.data
);

export const productErrorSelector = createSelector(
  actionFeatureSelector,
  (productState: ProductStateInterface) => productState.error
);

export const productIsSubmittingSelector = createSelector(
  actionFeatureSelector,
  (productState: ProductStateInterface) => productState.isSubmitting
);
