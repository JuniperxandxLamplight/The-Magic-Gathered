import { Component, OnInit } from '@angular/core';
import { FilterButton, nameAndSuper } from '../models/search-data-buttons.model'
import { HostListener} from "@angular/core";

//scroll tips addition
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../window.service";



@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.scss']
})

export class SearchDataComponent implements OnInit {
  searchTerms: any[] = [];
  nameVsSup: string = "";



//scroll tips addition
  public navIsFixed: boolean = false;

  public numberScrolls: number[] = [0];

  public trans: string = "transform";
  public colorbtn: string = "colorbtn";


  constructor(
  @Inject(DOCUMENT) private document: Document,
  @Inject(WINDOW) private window: Window) { }

  ngOnInit() {
  }

//scroll tips addition
  @HostListener("window:scroll", [])
  onWindowScroll() {

   this.numberScrolls.push(this.window.pageYOffset);

   const lastScroll = this.numberScrolls.shift();

   if (lastScroll > this.numberScrolls[0]) {
     this.trans = "transform"
   } else {
     this.trans = "transform-active"
     // console.log(this.window.pageYOffset)
     // console.log(trans)
   }


  }

  colorBtns = [
    new FilterButton("white", "../../assets/images/white_symbol.svg", 0),
    new FilterButton("green", "../../assets/images/green_symbol.svg", 1),
    new FilterButton("red", "../../assets/images/red_symbol.svg", 2),
    new FilterButton("blue", "../../assets/images/blue_symbol.svg", 3),
    new FilterButton("black", "../../assets/images/black_symbol.svg", 4),
  ]

  typeBtns = [
    new FilterButton("artifact", "../../assets/images/artifact_symbol.svg", 0),
    new FilterButton("creature", "../../assets/images/creature_symbol.svg", 1),
    new FilterButton("enchantment", "../../assets/images/enchantment_symbol.svg", 2),
    new FilterButton("land", "../../assets/images/land_symbol.svg", 3),
    new FilterButton("planeswalker", "../../assets/images/planeswalker_symbol.svg", 4),
    new FilterButton("sorcery", "../../assets/images/sorcery_symbol.svg", 5),
    new FilterButton("instant", "../../assets/images/instant_symbol.svg", 6)
  ]

  superTypes = [
    new nameAndSuper("byname", true, 0),
    new nameAndSuper("bysuper", false, 1)
  ]

  addSearchFilter(item, id){

    if (this.colorBtns[id].value == false) {
      this.colorBtns[id].value = true
      this.searchTerms.push(item);

    } else {
      this.colorBtns[id].value = false
      for( var i = 0; i < this.searchTerms.length; i++){
       if (this.searchTerms[i] === item) {
          this.searchTerms.splice(i, 1);
          }
        }
      }

    console.log(this.searchTerms)
    // console.log(this.colorBtns[id].name, this.colorBtns[id].value)
    // this.searchTerms.push(item);

  }

  addSearchFilterTyp(item, id){

    if (this.typeBtns[id].value == false) {
      this.typeBtns[id].value = true
      this.searchTerms.push(item);

    } else {
      this.typeBtns[id].value = false
      for( var i = 0; i < this.searchTerms.length; i++){
       if (this.searchTerms[i] === item) {
          this.searchTerms.splice(i, 1);
          }
        }
      }

    console.log(this.searchTerms)

  }

    addNameWins(){
      this.nameVsSup = "card-name"
      this.superTypes[0].value = true;
      this.superTypes[1].value = false;
      console.log(this.nameVsSup)
    }

    addSuperWins(){
      this.nameVsSup = "supertype"
      this.superTypes[0].value = false;
      this.superTypes[1].value = true;
      console.log(this.nameVsSup)
    }












}
