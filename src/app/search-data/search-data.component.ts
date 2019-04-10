import { Component, OnInit } from '@angular/core';
import { FilterButton } from '../models/search-data-buttons.model'
import { HostListener} from "@angular/core";

//scroll tips addition
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../window.service";





// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("filters").style.top = "0";
//   } else {
//     document.getElementById("filters").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.scss']
})

export class SearchDataComponent implements OnInit {
  searchTerms: any[] = [];

//scroll tips addition
  public navIsFixed: boolean = false;

  public numberScrolls: number[] = [0];

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
     console.log("scroll up")
   } else {
     console.log("scroll down")
   }


   console.log(this.numberScrolls)
   console.log(lastScroll)
 }


    // if (this.window.pageYOffset >= 0) {
    //   console.log(this.window.pageYOffset)
    // }
    // else if (document.body.scrollTop <= 0) {
    //   console.log("scrolling up")
    // }





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
