import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BannerComponent} from "./banner/banner.component";
import { WelcomeComponent } from './welcome/welcome.component';
import { BodyComponent } from './body.component';
import {ServicesComponent} from "./services/services.component";
import { YoeComponent } from './yoe/yoe.component';
import { TeamComponent } from './team/team.component';




@NgModule({
  declarations: [
    BannerComponent,
    WelcomeComponent,
    BodyComponent,
    ServicesComponent,
    YoeComponent,
    TeamComponent
  ],
  exports: [
    BodyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BodyModule { }
