import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'home', component: HomeViewComponent },
  {path:'we',component:WeatherAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
