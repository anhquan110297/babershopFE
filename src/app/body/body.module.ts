import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from "./banner/banner.component";
import {WelcomeComponent} from './welcome/welcome.component';
import {BodyComponent} from './body.component';
import {ServicesComponent} from "./services/services.component";
import {YoeComponent} from './yoe/yoe.component';
import {TeamComponent} from './team/team.component';
import {PricingComponent} from './pricing/pricing.component';
import {BookingComponent} from './booking/booking.component';
import {GalleryComponent} from './gallery/gallery.component';

@NgModule({
  declarations: [
    BannerComponent,
    WelcomeComponent,
    BodyComponent,
    ServicesComponent,
    YoeComponent,
    TeamComponent,
    PricingComponent,
    BookingComponent,
    GalleryComponent
  ],
  exports: [
    BodyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BodyModule {
}
