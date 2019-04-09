import { Component, OnInit } from '@angular/core';
import { FilterButton } from '../models/search-data-buttons.model'

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.scss']
})
export class SearchDataComponent implements OnInit {
  searchTerms: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  addSearchFilter(item){
    this.searchTerms.push(item);
    console.log(this.searchTerms)
  }

  colorBtns = [
    new FilterButton("white", "../../assets/images/white_symbol.svg"),
    new FilterButton("green", "../../assets/images/green_symbol.svg"),
    new FilterButton("red", "../../assets/images/red_symbol.svg"),
    new FilterButton("blue", "../../assets/images/blue_symbol.svg"),
    new FilterButton("black", "../../assets/images/black_symbol.svg"),
  ]

  typeBtns = [
    new FilterButton("artifact", "../../assets/images/artifact_symbol.svg"),
    new FilterButton("creature", "../../assets/images/creature_symbol.svg"),
    new FilterButton("enchantment", "../../assets/images/enchantment_symbol.svg"),
    new FilterButton("land", "../../assets/images/land_symbol.svg"),
    new FilterButton("planeswalker", "../../assets/images/planeswalker_symbol.svg"),
    new FilterButton("sorcery", "../../assets/images/sorcery_symbol.svg"),
    new FilterButton("instant", "../../assets/images/instant_symbol.svg")
  ]

}
