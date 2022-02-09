import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {GetCategoriesService} from "../../shared/services/get-categories.service";
import {getCategoryAction, categoryFailureAction, categorySuccessAction} from "../actions/categoryActions";
import {catchError, map, of, switchMap} from "rxjs";
import {CategoryInterface} from "../../shared/types/CategoryInterface";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class GetCategoryEffectsService {

  constructor(
    private actions$: Actions,
    private categoryService: GetCategoriesService
  ) { }

  getCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategoryAction),
      switchMap(() => {
        return this.categoryService.getCategories().pipe(
          map((categories: CategoryInterface[]) =>
          categorySuccessAction({categories: categories})
          ),

          catchError((errors: HttpErrorResponse) =>
            of(categoryFailureAction({errors: errors.error})))
        );
      })
    ))

}
