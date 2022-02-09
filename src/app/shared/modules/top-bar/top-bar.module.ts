import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavElementComponent } from './components/nav-element/nav-element.component';
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {MatTooltipModule} from "@angular/material/tooltip";

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
