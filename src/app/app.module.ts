import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomNumberComponentComponent } from './random-number-component/random-number-component.component';
import { NumberDisplayComponentComponent } from './number-display-component/number-display-component.component';
import { DataServiceService } from './service/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    RandomNumberComponentComponent,
    NumberDisplayComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
