import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CartComponent} from "./components/cart/cart.component";
import {ProductDetailsComponent} from "./components/details/details.component";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";

import {cartReducer, detailsReducer} from "./core";
import {EffectsModule} from "@ngrx/effects";
import {CartEffects} from "./core/cart.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    StoreModule.forRoot({cart: cartReducer, details: detailsReducer}, {}),
    EffectsModule.forRoot([CartEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
