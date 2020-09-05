import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Object } from 'src/app/model/object';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService, private router: Router) { }

  searchTerm = '';

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "dots": true,
    "infinite": true,
    "speed":1250,
    "useTransform":true
  };


  resultsArray: Object[];

  ngOnInit() {
  }

  onSearchTermChange(): void {
    var items:any = document.getElementsByClassName('content');
    for (let i = 0; i < items.length; i++) {
        let element = items[i];
        element.style.opacity = '0.8';
    }
    this.searchService.getSearchFiltered(this.searchTerm)
    .subscribe(results => this.resultsArray = results);
  }

  goTo(data: Object): void{
    if (data.idfilm < 0) {
      console.log('data is series');
      this.router.navigate(['/series-details', data.idseries]);
    } 
    else {
      console.log('data is film');
      this.router.navigate(['/film-details', data.idfilm]);
    }
  }


}
