import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {GetProductsService} from "../../shared/services/get-products.service";
import {
  singleProductAction,
  singleProductFailureAction,
  singleProductSuccessAction
} from "../actions/singleProductActions";
import {catchError, map, of, switchMap} from "rxjs";
import {ProductInterface} from "../../shared/types/ProductInterface";

@Injectable()
export class SingleProductEffectService {

  constructor(
    private actions$: Actions,
    private singleProductService: GetProductsService ) { }

  getSingleProduct$ = createEffect( () =>
    this.actions$.pipe(
      ofType(singleProductAction),
      switchMap(({id}) => {
        return this.singleProductService.getSingleProduct(id).pipe(
          map((product: ProductInterface) => singleProductSuccessAction({product})),

          catchError(()=> of(singleProductFailureAction))
        )
      })
    ))
}
