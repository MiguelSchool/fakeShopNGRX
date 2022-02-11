import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {
  getUserInformationFailureAction,
  getUserInformationSuccessAction,
  loginAction, loginFailureAction,
  loginSuccessAction
} from "../actions/loginActions";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {UserInterface} from "../../../shared/types/UserInterface";
import {PersistenceService} from "../../../shared/services/persistence.service";

@Injectable()
export class LoginEffectService {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private persistenceService: PersistenceService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({user}) => {
        return this.authService.login(user).pipe(
          map((token) => {
            this.persistenceService.set('accessToken', token);
            return loginSuccessAction({token, user})
          }),

          catchError((errorResponse: HttpErrorResponse) =>
            of(loginFailureAction({error:errorResponse.error.errors})))
        )
      })
    ))

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccessAction),
      switchMap(({token, user}) => {
        return this.authService.getUser(user.username).pipe(
          map((user: UserInterface) => getUserInformationSuccessAction({user}))
          ,catchError((errorResponse: HttpErrorResponse) =>
            of(getUserInformationFailureAction({error: errorResponse.error.errors})))
        )
      })
    ))

  redirectAfterSubmit$ = createEffect( () =>
    this.actions$.pipe(
      ofType(getUserInformationSuccessAction),
      tap(() => this.router.navigateByUrl('/products'))
    ), {dispatch: false}
  )
}
