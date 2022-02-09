import {createAction, props} from "@ngrx/store";
import {CategoryActionTypes} from "../actionTypes/categoryActionTypes";
import {BackendErrorsInterface} from "../../../shared/types/BackendErrorsInterface";
import {CategoryInterface} from "../../shared/types/CategoryInterface";

export const getCategoryAction = createAction(
  CategoryActionTypes.CATEGORY_ACTION,
);

export const categorySuccessAction = createAction(
  CategoryActionTypes.CATEGORY_ACTION_SUCCESS,
  props<{categories: CategoryInterface[]}>()
);

export const categoryFailureAction = createAction(
  CategoryActionTypes.CATEGORY_ACTION_FAILURE,
  props<{errors : BackendErrorsInterface}>()
)
