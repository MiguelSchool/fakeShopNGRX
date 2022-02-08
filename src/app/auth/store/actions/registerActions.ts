import {createAction, props} from "@ngrx/store";
import {HttpErrorResponse} from "@angular/common/http";
import {RegisterActionTypes} from "../actiontypes/registerActionTypes";

import {UserInterface} from "../../../shared/types/UserInterface";
import {RegisterUserInterface} from "../../shared/types/RegisterUser";

export const registerAction = createAction(
  RegisterActionTypes.REGISTER,
  props<{user: RegisterUserInterface}>()
);

export const registerSuccessAction = createAction(
  RegisterActionTypes.REGISTER_SUCCESS,
  props<{user: UserInterface}>()
);

export const registerFailureAction = createAction(
  RegisterActionTypes.REGISTER_FAILURE,
  props<{error: HttpErrorResponse}>()
);
