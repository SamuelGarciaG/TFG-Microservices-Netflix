import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { Router } from '@angular/router';
import { Series } from 'src/app/model/series';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  seriesArray: Series[];
  seriesActionArray: Series[];

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
    .subscribe(seriesA => this.seriesActionArray = seriesA)
  }

  goTo(data: Series): void{
    this.router.navigate(['/series-details', data.idseries]);
  }

}
