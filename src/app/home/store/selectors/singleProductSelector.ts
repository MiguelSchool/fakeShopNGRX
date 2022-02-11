import {createFeatureSelector, createSelector} from "@ngrx/store";
import {SingleProductStateInterface} from "../../shared/types/ProductStateInterface";
import {AppStateInterface} from "../../../shared/types/AppStateInterface";
import {ProductInterface} from "../../shared/types/ProductInterface";
import {BackendErrorsInterface} from "../../../shared/types/BackendErrorsInterface";


export const singleActionFeatureSelector = createFeatureSelector<
  AppStateInterface,SingleProductStateInterface>('singleProduct');

export const getSingleProductSelector = createSelector(
  singleActionFeatureSelector,
  (productState: SingleProductStateInterface) => productState.data
);

export const getSingleProductIsLoadingSelector = createSelector(
  singleActionFeatureSelector,
  (productState: SingleProductStateInterface) => productState.isLoading
);

export const errorSingleProductErrorSelector = createSelector(
  singleActionFeatureSelector,
  (productState: SingleProductStateInterface) => productState.error
);

export const singleProductIsSubmittingSelector = createSelector(
  singleActionFeatureSelector,
  (productState: SingleProductStateInterface) => productState.isSubmitting
);
