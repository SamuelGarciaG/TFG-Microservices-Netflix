import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { HomeComponent } from './components/home/home.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { SeriesComponent } from './components/series/series.component';
import { SeriesDetailsComponent } from './components/series-details/series-details.component';
import { SearchComponent } from './components/search/search.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'film-details/:id', component: FilmDetailsComponent },
  { path: 'series-details/:id', component: SeriesDetailsComponent },
  { path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
