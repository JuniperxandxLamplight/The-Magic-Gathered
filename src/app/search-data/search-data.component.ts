import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.scss']
})
export class SearchDataComponent implements OnInit {
  searchTerms: any[];

  constructor() { }

  ngOnInit() {
  }

  addSearchFilter(item){
    this.searchTerms.push(item);
  }

}
