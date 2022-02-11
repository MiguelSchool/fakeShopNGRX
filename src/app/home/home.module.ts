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
import { CategoryCardComponent } from './components/category-card/category-card.component';
import {MatButtonModule} from "@angular/material/button";
import {FilterProductService} from "./shared/services/filter-product.service";
import {LoadingModule} from "../shared/modules/loading/loading.module";
import { RatingComponent } from './components/rating/rating.component';
import {NgxStarRatingModule} from "ngx-star-rating";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RatingModule} from "ngx-bootstrap/rating";
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { OnFilterCategoriesPipe } from './shared/pipes/on-filter-categories.pipe';
import {SingleProductEffectService} from "./store/effects/single-product-effect.service";
import {singleProductReducers} from "./store/reducers/SingleProductReducers";
import {AuthModule} from "../auth/auth.module";
import {LoginEffectService} from "../auth/store/effects/login-effect.service";
import {LogoutEffectService} from "../auth/store/effects/logout-effect.service";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'product/:id',
    component: ProductDetailComponent
  }
]
@NgModule({
  declarations: [
    HomeComponent,
    ProductCardComponent,
    CategoryCardComponent,
    RatingComponent,
    ProductDetailComponent,
    OnFilterCategoriesPipe
  ],
  imports: [
    CommonModule,
    RatingModule.forRoot(),
    RouterModule.forChild(routes),
    EffectsModule.forFeature([
      GetCategoryEffectsService,
      GetProductEffectService,
      SingleProductEffectService,
      LoginEffectService,
      LogoutEffectService
    ]),
    StoreModule.forFeature('category', categoryReducers),
    StoreModule.forFeature('product', productReducers),
    StoreModule.forFeature('singleProduct', singleProductReducers),
    MatCardModule,
    MatButtonModule,
    LoadingModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule
  ],
  providers: [
    GetCategoriesService,
    GetProductsService,
    FilterProductService
  ]
})
export class HomeModule { }
