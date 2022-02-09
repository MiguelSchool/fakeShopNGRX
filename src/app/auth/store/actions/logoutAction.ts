import {createAction} from "@ngrx/store";
import {LogoutActionTypes} from "../actiontypes/LogoutActionTypes";

export const logoutAction = createAction(
  LogoutActionTypes.LOGOUT
);
