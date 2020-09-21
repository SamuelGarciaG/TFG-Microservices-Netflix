import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { Router } from '@angular/router';
import { Series } from 'src/app/model/series';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-200px)' }),
        animate(
            '.75s ease-in',
            style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),
  ],
})
export class SeriesComponent implements OnInit {

  seriesArray: Series[];
  seriesActionArray: Series[];
  seriesDramaArray: Series[];
  seriesCrimeArray: Series[];
  seriesSciFiArray: Series[];
  seriesComedyArray: Series[];

  constructor(private seriesService: SeriesService, private router: Router) { }

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "dots": true,
    "infinite": true,
    "speed":1250,
    "useTransform":true
  };

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries(): void {
    this.seriesService.getSeries()
    .subscribe(series => this.seriesArray = series);
    this.seriesService.getSeriesByGenre("drama")
    .subscribe(series => this.seriesDramaArray = series)
    this.seriesService.getSeriesByGenre("action")
    .subscribe(series => this.seriesActionArray = series)
    this.seriesService.getSeriesByGenre("crime")
    .subscribe(series => this.seriesCrimeArray = series)
    this.seriesService.getSeriesByGenre("science fiction")
    .subscribe(series => this.seriesSciFiArray = series)
    this.seriesService.getSeriesByGenre("comedy")
    .subscribe(series => this.seriesComedyArray = series)
  }

  goTo(data: Series): void{
    this.router.navigate(['/series-details', data.idseries]);
  }

}
