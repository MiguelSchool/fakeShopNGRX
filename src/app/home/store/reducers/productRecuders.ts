import {ProductStateInterface} from "../../shared/types/ProductStateInterface";
import {Action, createReducer, on} from "@ngrx/store";
import {getProductAction, getProductActionFailure, getProductActionSuccess} from "../actions/productActions";


const initialState: ProductStateInterface = {
  data: null,
  error: null,
  isLoading: false,
  isSubmitting: false
}

const reducers = createReducer(
  initialState,
  on(
    getProductAction,
    (state): ProductStateInterface => ({
      ...state,
      isLoading: true,
      error: null
    })
  ),

  on(
    getProductActionSuccess,
    (state, action): ProductStateInterface => ({
      ...state,
      data: action.products,
      isLoading: false,
      error: null
    })
  ),

  on(
    getProductActionFailure,
    (state, action): ProductStateInterface => ({
      ...state,
      data: null,
      isLoading: false,
      error: action.error
    })
  )
);
export function productReducers(state: ProductStateInterface, action: Action){
  return reducers(state, action);
}
