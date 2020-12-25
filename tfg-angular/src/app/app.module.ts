import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from "@angular/material/card";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ContainerComponent } from './container/container.component';
import { FilmsComponent } from './components/films/films.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { SeriesDetailsComponent } from './components/series-details/series-details.component';
import { SeriesComponent } from './components/series/series.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { BasicAuthHtppInterceptorService } from './services/BasicAuthHtppInterceptorService';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    FilmsComponent,
    HomeComponent,
    SearchComponent,
    FilmDetailsComponent,
    SeriesDetailsComponent,
    SeriesComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    FlexLayoutModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
