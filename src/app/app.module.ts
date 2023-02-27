import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarLogoComponent } from './nav-bar/nav-bar-logo/nav-bar-logo.component';
import { NavBarSearchComponent } from './nav-bar/nav-bar-search/nav-bar-search.component';
import { NavBarIconsComponent } from './nav-bar/nav-bar-icons/nav-bar-icons.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NavBarLogoComponent,
    NavBarSearchComponent,
    NavBarIconsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
