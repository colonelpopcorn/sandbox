import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyCalculatorModule } from 'my-calculator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyCalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
