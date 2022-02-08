import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {BackendErrorsInterface} from "../../../shared/types/BackendErrorsInterface";
import {select, Store} from "@ngrx/store";
import {isLoadingSelector, isSubmittingSelector, validationErrorSelector} from "../../store/selectors/authSelectors";
import {LoginUserInterface} from "../../shared/types/loginUser";
import {loginAction} from "../../store/actions/loginActions";

@Component({
  selector: 'main-method-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  isSubmitting$: Observable<boolean> | undefined;
  isLoading$: Observable<boolean> | undefined;
  backendErrors$: Observable<BackendErrorsInterface | null> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) {
    this.formGroup = this.formBuilder.group({
      username: [ null, Validators.required],
      password: [ null, Validators.required]
    })
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  private initializeForm(): void {

  }

  private initializeValues(): void {

    // @ts-ignore
    this.isSubmitting$  = this.store.pipe(select(isSubmittingSelector));
    // @ts-ignore
    this.backendErrors$ = this.store.pipe(select(validationErrorSelector));
    // @ts-ignore
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
  }

  onLogin(): void {
    const request: LoginUserInterface = this.formGroup.value
    this.store.dispatch(loginAction({user:request}))
  }
}
