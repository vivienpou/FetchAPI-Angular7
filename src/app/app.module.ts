import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentralresultsComponent } from './centralresults/centralresults.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebareComponent } from './sidebare/sidebare.component';
import { JumboModule } from './jumbo/jumbo.module';
import { HttpClientModule } from '@angular/common/http';
import { FetchdataserviceService } from './fetchdataservice.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CentralresultsComponent,
    NavbarComponent,
    SidebareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JumboModule,
    NoopAnimationsModule,
  ],
  providers: [FetchdataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
