import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthModule} from "./auth/auth.module";
import {Store, StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment.prod";
import {RouterModule, Routes} from "@angular/router";
import {TopBarModule} from "./shared/modules/top-bar/top-bar.module";
import {HomeModule} from "./home/home.module";
import {getCategoryAction} from "./home/store/actions/categoryActions";
import {getProductAction} from "./home/store/actions/productActions";
import {LoginEffectService} from "./auth/store/effects/login-effect.service";
import {RegisterEffectService} from "./auth/store/effects/register-effect.service";
import {LogoutEffectService} from "./auth/store/effects/logout-effect.service";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('src/app/home/home.module')
      .then(module => module.HomeModule)
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        EffectsModule.forRoot([]),
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
        TopBarModule,
        AuthModule,
        HomeModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private store: Store) {
    this.store.dispatch(getCategoryAction());
    this.store.dispatch(getProductAction());

  }
}
