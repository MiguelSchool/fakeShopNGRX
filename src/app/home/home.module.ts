import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {GetCategoryEffectsService} from "./store/effects/get-category-effects.service";
import {GetCategoriesService} from "./shared/services/get-categories.service";
import {StoreModule} from "@ngrx/store";
import {categoryReducers} from "./store/reducers/categoryReducers";
import {GetProductsService} from "./shared/services/get-products.service";
import {GetProductEffectService} from "./store/effects/get-product-effect.service";
import {productReducers} from "./store/reducers/productRecuders";
import { ProductCardComponent } from './components/product-card/product-card.component';
import {MatCardModule} from "@angular/material/card";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]
@NgModule({
  declarations: [
    HomeComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([
      GetCategoryEffectsService,
      GetProductEffectService
    ]),
    StoreModule.forFeature('category', categoryReducers),
    StoreModule.forFeature('product', productReducers),
    MatCardModule,
  ],
  providers: [
    GetCategoriesService,
    GetProductsService
  ]
})
export class HomeModule { }
