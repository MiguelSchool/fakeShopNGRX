import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {GetProductsService} from "../../shared/services/get-products.service";
import {getProductAction, getProductActionFailure, getProductActionSuccess} from "../actions/productActions";
import {catchError, map, of, switchMap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class GetProductEffectService {

  constructor(
    private actions$: Actions,
    private getProductsService: GetProductsService
  ) { }

  getProducts$ = createEffect( () =>
    this.actions$.pipe(
      ofType(getProductAction),
      switchMap(() => {
        return this.getProductsService.getProducts().pipe(
          map((products) => getProductActionSuccess({products}))
        )
      })
    ))
}
