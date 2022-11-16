import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {ChipComponentModule} from "./components/chip/chip.component-module";
import {ChipFormComponentModule} from "./components/chip-form/chip-form.component-module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChipComponentModule,
    ChipFormComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
