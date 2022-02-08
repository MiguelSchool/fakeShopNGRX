import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../shared/services/auth.service";
import {Store} from "@ngrx/store";
import {registerAction, registerFailureAction, registerSuccessAction} from "../actions/registerActions";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {UserInterface} from "../../../shared/types/UserInterface";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class RegisterEffectService {

  constructor(
    private actions$: Actions,
    private store: Store,
    private router: Router,
    private authService: AuthService
  ) { }

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerAction),
      switchMap(({user}) => {
        return this.authService.addUser(user).pipe(
          map((user: UserInterface) => registerSuccessAction({user})),

          catchError((errorResponse: HttpErrorResponse) =>
            of(registerFailureAction({error: errorResponse.error.errors})))
        )
      })
    );
  })

  redirectAfterSubmit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerSuccessAction),
      tap(() => this.router.navigateByUrl('/login'))
    ),
    {dispatch: false}
  )
}
