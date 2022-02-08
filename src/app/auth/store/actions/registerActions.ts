import {createAction, props} from "@ngrx/store";
import {LoginActionTypes} from "../actiontypes/LoginActionTypes";
import {LoginUserInterface} from "../../shared/types/loginUser";
import {HttpErrorResponse} from "@angular/common/http";
import {RegisterActionTypes} from "../actiontypes/registerActionTypes";
import {UserInterface} from "../../../shared/types/UserInterface";

export const registerAction = createAction(
  RegisterActionTypes.REGISTER,
  props<{user: UserInterface}>()
);

export const registerSuccessAction = createAction(
  RegisterActionTypes.REGISTER_SUCCESS,
  props<{user: UserInterface}>()
);

export const registerFailureAction = createAction(
  RegisterActionTypes.REGISTER_FAILURE,
  props<{error: HttpErrorResponse}>()
);
