import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorsComponent } from './components/backend-errors/backend-errors.component';
import {MatFormFieldModule} from "@angular/material/form-field";



@NgModule({
  declarations: [
    BackendErrorsComponent
  ],
  exports: [
    BackendErrorsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule
  ]
})
export class ValidationErrorsModule { }
