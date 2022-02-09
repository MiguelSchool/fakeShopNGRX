import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavElementComponent } from './components/nav-element/nav-element.component';
import {MatIconModule} from "@angular/material/icon";
import {RouterModule, Routes} from "@angular/router";
import {MatTooltipModule} from "@angular/material/tooltip";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('src/app/auth/auth.module')
      .then(module => module.AuthModule)
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/auth/auth.module')
      .then(module => module.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/home/home.module')
      .then(module => module.HomeModule)
  }
]
@NgModule({
    declarations: [
        TopBarComponent,
        NavElementComponent
    ],
    exports: [
        TopBarComponent
    ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatTooltipModule
  ]
})
export class TopBarModule { }
