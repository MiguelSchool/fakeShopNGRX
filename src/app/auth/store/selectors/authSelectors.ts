import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppStateInterface} from "../../../shared/types/AppStateInterface";
import {AuthStateInterface} from "../../types/AuthStateInterface";

const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
  >('auth');


export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);

export const isLoadingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoading
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser
);
export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => !authState.isLoggedIn
);

export const validationErrorSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
);

export const userTokenSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.userToken
);
