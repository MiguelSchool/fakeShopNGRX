import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppStateInterface} from "../../../shared/types/AppStateInterface";
import {CategoryStateInterface} from "../../shared/types/CategoryStateInterface";

export const actionFeatureSelector = createFeatureSelector<
  AppStateInterface, CategoryStateInterface>('category');

export const isLoadingSelector = createSelector(
  actionFeatureSelector,
  (categoryState: CategoryStateInterface) => categoryState.isLoading
);

export const categorySelector = createSelector(
  actionFeatureSelector,
  (categoryState: CategoryStateInterface) => categoryState.data
);

export const categoryErrorSelector = createSelector(
  actionFeatureSelector,
  (categoryState: CategoryStateInterface) => categoryState.error
);
