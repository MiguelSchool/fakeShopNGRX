import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {EffectsModule} from "@ngrx/effects";
import {AuthService} from "./shared/services/auth.service";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    EffectsModule.forFeature([]),

  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
