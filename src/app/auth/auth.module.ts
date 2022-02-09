import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {AuthService} from "./shared/services/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {StoreModule} from "@ngrx/store";
import {authReducer} from "./store/reducers/authReducer";
import {EffectsModule} from "@ngrx/effects";
import {LoginEffectService} from "./store/effects/login-effect.service";
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {LoadingModule} from "../shared/modules/loading/loading.module";
import {ValidationErrorsModule} from "../shared/modules/validation-errors/validation-errors.module";
import {RegisterEffectService} from "./store/effects/register-effect.service";


const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([
      LoginEffectService,
      RegisterEffectService
    ]),
    MatCardModule,
    MatButtonModule,
    LoadingModule,
    ValidationErrorsModule
  ],
  exports: [
    LoginComponent,
    MatFormFieldModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
