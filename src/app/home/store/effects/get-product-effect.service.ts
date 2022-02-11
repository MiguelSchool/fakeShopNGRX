import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {GetProductsService} from "../../shared/services/get-products.service";
import {getProductAction, getProductActionFailure, getProductActionSuccess} from "../actions/productActions";
import {catchError, map, of, switchMap} from "rxjs";
import {
  filterProductsAction,
  filterProductsFailureAction,
  filterProductsSuccessAction
} from "../actions/filterProductsActions";
import {FilterProductService} from "../../shared/services/filter-product.service";
import {ProductInterface} from "../../shared/types/ProductInterface";

@Injectable()
export class GetProductEffectService {

  constructor(
    private actions$: Actions,
    private getProductsService: GetProductsService,
    private getFilterProductsService: FilterProductService
  ) { }

  getProducts$ = createEffect( () =>
    this.actions$.pipe(
      ofType(getProductAction),
      switchMap(() => {
        return this.getProductsService.getProducts().pipe(
          map((products) => getProductActionSuccess({products}))
        )
      })
    ));

  getFilterProducts$ = createEffect( () =>
    this.actions$.pipe(
      ofType(filterProductsAction),
      switchMap( ({category}) => {
        return this.getFilterProductsService.getFilterProducts(category).pipe(
          map((products: ProductInterface[]) => filterProductsSuccessAction({products})),
          catchError((error) => of(filterProductsFailureAction))
        )
      })
    ));
}
