import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterUserInterface} from "../../shared/types/RegisterUser";
import {select, Store} from "@ngrx/store";
import {registerAction} from "../../store/actions/registerActions";
import {isLoadingSelector} from "../../store/selectors/authSelectors";

@Component({
  selector: 'main-method-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  isLoading$: Observable<boolean> | undefined;
  formGroup: FormGroup | undefined;


  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initialValues();
  }
  private initializeForm(): void {
    this.formGroup = this.formBuilder.group({
      email: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.email
        ]
      ],
      username: [ null, Validators.required],
      password: [ null, Validators.required],
      firstname: [ null],
      lastname: [ null],
      city: [ null, Validators.minLength(4)],
      street: [ null, Validators.minLength(4)],
      number: [ null, Validators.min(0)],
      zipcode: [ null, Validators.minLength(5)],
      geoLat: [null],
      geoLong: [null],
      phone: [null]
    })
  }
  private initialValues(): void {
    // @ts-ignore
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }
  onRegister() {
    const user: RegisterUserInterface = this.getRegisterUser();
    this.store.dispatch(registerAction({user}));
    this.formGroup?.reset();
  }

  getRegisterUser(): RegisterUserInterface {
    const email = this.formGroup?.get('email')?.value;
    const username = this.formGroup?.get('username')?.value;
    const password = this.formGroup?.get('password')?.value;
    const firstname = this.formGroup?.get('firstname')?.value;
    const lastname = this.formGroup?.get('lastname')?.value;
    const city = this.formGroup?.get('city')?.value;
    const street = this.formGroup?.get('street')?.value;
    const streetNumberString = this.formGroup?.get('number')?.value;
    const zipcode = this.formGroup?.get('zipcode')?.value;
    const geoLat = this.formGroup?.get('geoLat')?.value;
    const geoLong = this.formGroup?.get('geoLong')?.value;
    const phone = this.formGroup?.get('phone')?.value;

    let streetNumber: number;
    streetNumberString ? streetNumber = +streetNumberString : streetNumber = 0;

      return  {
        address: {
          street: street ? street : '',
          city: city ? city : '',
          zipcode: zipcode ? zipcode : '',
          number: streetNumber ? streetNumber : +'',
          geolocation: {lat: geoLat, long: geoLong}
        },
        email: email,
        name: {
          firstname: firstname ? firstname: '' ,
          lastname : lastname  ? lastname: ''
        },
        password: password,
        phone: phone ? phone : '',
        username: username
      }
  }
}
