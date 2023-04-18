import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ShareModule} from "./share/share.module";
import {BodyModule} from "./body/body.module";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {ProductComponent} from './product/product.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from "@ngrx/store";
import {cartReducer} from "./cart-state-store/cart.reducer";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    ShareModule,
    BodyModule,
    RouterOutlet,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({cartEntries: cartReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
