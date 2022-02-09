import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {GetCategoryEffectsService} from "./store/effects/get-category-effects.service";
import {GetCategoriesService} from "./shared/services/get-categories.service";
import {StoreModule} from "@ngrx/store";
import {categoryReducers} from "./store/reducers/homeReducers";
import {AuthModule} from "../auth/auth.module";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([
      GetCategoryEffectsService
    ]),
    StoreModule.forFeature('category', categoryReducers)
  ],
  providers: [
    GetCategoriesService
  ]
})
export class HomeModule { }
