import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {
  getUserInformationFailureAction,
  getUserInformationSuccessAction,
  loginAction,
  loginSuccessAction
} from "../actions/loginActions";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {UserInterface} from "../../../shared/types/UserInterface";

@Injectable()
export class LoginEffectService {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({user}) => {
        return this.authService.login(user).pipe(
          map((token) => loginSuccessAction({token, user}))
        )
      }),
    ))

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccessAction),
      switchMap(({token, user}) => {
        return this.authService.getUser(user.username).pipe(
          map((user: UserInterface) => getUserInformationSuccessAction({user}))
          ,catchError((errorResponse: HttpErrorResponse) =>
            of(getUserInformationFailureAction({error: errorResponse.error.error})))
        )
      })
    ))

  redirectAfterSubmit$ = createEffect( () =>
    this.actions$.pipe(
      ofType(getUserInformationSuccessAction),
      tap(() => this.router.navigateByUrl('')) // TODO: on navigate to home
    ), {dispatch: false}
  )
}
