import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BandsComponent } from './bands/bands.component';
import { GuitarsComponent } from './guitars/guitars.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"bands",component:BandsComponent},
  {path:"guitars",component:GuitarsComponent},
  {path:"accessories",component:AccessoriesComponent},
  {path:"search",component:SearchEngineComponent},
  {path:"**", component:ErrorComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
