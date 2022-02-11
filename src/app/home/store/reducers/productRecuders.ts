import {ProductStateInterface, SingleProductStateInterface} from "../../shared/types/ProductStateInterface";
import {Action, createReducer, on} from "@ngrx/store";
import {getProductAction, getProductActionFailure, getProductActionSuccess} from "../actions/productActions";
import {
  filterProductsAction,
  filterProductsFailureAction,
  filterProductsSuccessAction
} from "../actions/filterProductsActions";


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
  ),

  on(
    filterProductsAction,
    (state): ProductStateInterface => ({
      ...state,
      data: null,
      isLoading: true,
      error: null
    })
  ),
  on(
    filterProductsSuccessAction,
    (state, action): ProductStateInterface => ({
      ...state,
      isLoading: false,
      error: null,
      data: action.products
    })
  ),

  on(
    filterProductsFailureAction,
    (state): ProductStateInterface => ({
      ...state,
      isLoading: false,
      data: null,
      error: null // todo: error handling !!!
    })
  ),
);
export function productReducers(state: ProductStateInterface, action: Action){
  return reducers(state, action);
}
