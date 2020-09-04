import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';
import { Series } from 'src/app/model/series';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit {

  series: Series;

  constructor(private seriesService: SeriesService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    console.log(id);
    this.seriesService.getSeriesById(id)
      .subscribe(series => this.series = series);
  }

  NewTab() { 
    window.open( 
      "https://www.youtube.com/");
}

}