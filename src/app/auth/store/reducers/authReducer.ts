import {AuthStateInterface} from "../../types/AuthStateInterface";
import {Action, createReducer, on} from "@ngrx/store";
import {
  getUserInformationFailureAction,
  getUserInformationSuccessAction,
  loginAction,
  loginFailureAction,
  loginSuccessAction
} from "../actions/loginActions";

const initialState: AuthStateInterface = {
  currentUser: null,
  isLoading: false,
  isLoggedIn: false,
  isSubmitting: false,
  validationErrors: null,
  userToken: null
}

const reducers = createReducer(
  initialState,
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),

  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      isLoading: true,
      userToken: action.token
    })
  ),

  on(
    getUserInformationSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      isLoading: false,
      currentUser: action.user
    })
  ),

  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: false,
      validationErrors: action.error.error
    })
  ),

  on(
    getUserInformationFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      isLoggedIn: false,
      validationErrors: action.error.error
    })
  )
);

export function authReducer(state: AuthStateInterface, action: Action): AuthStateInterface {
  return reducers(state, action);
}
