import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HomeViewComponent } from './home-view/home-view.component';



@NgModule({
  declarations: [
    AppComponent,
    WeatherAppComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
   
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
  
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
