import {createAction, props} from "@ngrx/store";
import {LoginActionTypes} from "../actiontypes/LoginActionTypes";
import {LoginUserInterface} from "../../shared/types/loginUser";
import {HttpErrorResponse} from "@angular/common/http";
import {UserInterface} from "../../../shared/types/UserInterface";

export const loginAction = createAction(
  LoginActionTypes.LOGIN,
  props<{user: LoginUserInterface}>()
);

export const loginSuccessAction = createAction(
  LoginActionTypes.LOGIN_SUCCESS,
  props<{token :string, user: LoginUserInterface}>()
);

export const loginFailureAction = createAction(
  LoginActionTypes.LOGIN_FAILURE,
  props<{error: HttpErrorResponse}>()
);


export const getUserInformationSuccessAction = createAction(
  LoginActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{user: UserInterface}>()
);


export const getUserInformationFailureAction = createAction(
  LoginActionTypes.GET_CURRENT_USER_FAILURE,
  props<{error: HttpErrorResponse}>()
);
