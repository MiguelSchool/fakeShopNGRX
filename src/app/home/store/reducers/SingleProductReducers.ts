import {Action, createReducer, on} from "@ngrx/store";
import {
  singleProductAction,
  singleProductFailureAction,
  singleProductSuccessAction
} from "../actions/singleProductActions";
import {SingleProductStateInterface} from "../../shared/types/ProductStateInterface";

const initialState : SingleProductStateInterface = {
  data: null,
  error: null,
  isLoading: false,
  isSubmitting: false
}

const reducer = createReducer(
  initialState,
  on(
    singleProductAction,
    (state): SingleProductStateInterface => ({
      ...state,
      isLoading: true,
      data: null,
      error: null
    })
  ),

  on(
    singleProductSuccessAction,
    (state, action): SingleProductStateInterface => ({
      ...state,
      isLoading: false,
      data: action.product,
      error: null
    })
  ),

  on(
    singleProductFailureAction,
    (state, action): SingleProductStateInterface => ({
      ...state,
      isLoading:false,
      data: null,
      error: null
    })
  )
);


export function singleProductReducers(state: SingleProductStateInterface, action: Action){
  return reducer(state, action);
}
