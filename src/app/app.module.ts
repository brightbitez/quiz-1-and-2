import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Quiz1Component } from './quiz1/quiz1.component';
import { HttpClientModule } from '@angular/common/http';
import { Quiz2Component } from './quiz2/quiz2.component';

@NgModule({
  declarations: [
    AppComponent,
    Quiz1Component,
    Quiz2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
