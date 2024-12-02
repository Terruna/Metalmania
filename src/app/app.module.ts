import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { FormsModule } from '@angular/forms';
import { BandsComponent } from './bands/bands.component';
import { GuitarsComponent } from './guitars/guitars.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchEngineComponent,
    BandsComponent,
    GuitarsComponent,
    AccessoriesComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
