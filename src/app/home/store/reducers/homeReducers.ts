import {CategoryStateInterface} from "../../shared/types/CategoryStateInterface";
import {Action, createReducer, on} from "@ngrx/store";
import {getCategoryAction, categoryFailureAction, categorySuccessAction} from "../actions/categoryActions";

const initialState: CategoryStateInterface = {
  data: null,
  error: null,
  isLoading: false
};

const reducers = createReducer(
  initialState,
  on(
    getCategoryAction,
    (state): CategoryStateInterface => ({
      ...state,
      isLoading: true
    })
  ),

  on(
    categorySuccessAction,
    (state, action): CategoryStateInterface => ({
      ...state,
      data: action.categories,
      isLoading: false
    })
  ),

  on(
    categoryFailureAction,
    (state, action): CategoryStateInterface => ({
      ...state,
      data: null,
      isLoading: false,
      error: action.errors
    })
  )
);

export function categoryReducers(state: CategoryStateInterface, action: Action): CategoryStateInterface {
  return reducers(state, action);
}
