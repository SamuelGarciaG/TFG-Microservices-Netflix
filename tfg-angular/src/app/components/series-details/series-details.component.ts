import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';
import { Series } from 'src/app/model/series';
import { Review } from 'src/app/model/review';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit {

  series: Series;
  reviews: Review[];
  form: FormGroup;
  
  constructor(private http: HttpClient, private seriesService: SeriesService, private route: ActivatedRoute, public fb: FormBuilder) {
    this.form = this.fb.group({
      review: [''],
      rating: [null]
    })
   }

   submitForm() {
    let postData = {
      'comment': this.form.get('review').value,
      'film': 0,
      'name': this.series.name,
      'rating': this.form.get('rating').value,
      'user': sessionStorage.getItem('username')
    }
    this.http.post('http://localhost:7000/review-service/review/add', postData).subscribe(
      (response: Response) => this.form.reset(),
      (error) => console.log(error))
  }

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