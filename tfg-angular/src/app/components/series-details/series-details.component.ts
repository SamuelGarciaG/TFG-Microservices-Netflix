import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';
import { Series } from 'src/app/model/series';
import { Review } from 'src/app/model/review';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit {

  series: Series;
  reviews: Review[];
  constructor(private seriesService: SeriesService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    console.log(id);
    this.seriesService.getSeriesById(id)
      .subscribe(series => this.series = series);
    this.call();
  }

  NewTab() { 
    window.open( 
      this.series.urltrailer);
}
  async call(){
    await this.delay(300);
    this.reviews = JSON.parse(this.series.reviews);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}