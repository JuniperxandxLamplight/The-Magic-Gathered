import { Component, OnInit } from '@angular/core';
import { FilterButton, nameAndSuper } from '../models/search-data-buttons.model'
import { HostListener} from "@angular/core";

//scroll tips addition
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../window.service";
import { MtgCardsService } from "../mtg-cards.service";
import { Card } from '../models/card.model';




@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.scss'],
  providers: [MtgCardsService],
})

export class SearchDataComponent implements OnInit {
  searchTerms: any[] = [];
  public formattedSearchTerms: string = "";
  public inputTerm: string = 't:';
  public inputName: string = '!';
  nameVsSup: string = "";
  cardPage: any[] = [];
  cardList: any[] = [];
  formattedCardList: any[] = [];




//scroll tips addition
  public navIsFixed: boolean = false;

  public numberScrolls: number[] = [0];

  public trans: string = "transform";
  public colorbtn: string = "colorbtn";


  constructor(
  @Inject(DOCUMENT) private document: Document,
  @Inject(WINDOW) private window: Window, private cardsService: MtgCardsService) { }

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

  formatAPIReturn() {}

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

    formatQuery(paramArray) {
      let paramString = '('
      const paramObj = {
        white: 'c:w ',
        green: 'c:g ',
        red: 'c:r ',
        blue: 'c:u ',
        black: 'c:b ',
        artifact: 't:artifact ',
        creature: 't:creature ',
        enchantment: 't:enchantment ',
        land: 't:land ',
        planeswalker: 't:planeswalker ',
        sorcery: 't:sorcery ',
        instant: 't:instant '
      };

      paramArray.forEach(function (param) {
        if(paramObj[param]) {
          paramString += paramObj[param];
        }
      });

      //check for input term and add it to the query
      paramString += ')';
      if(this.inputTerm !== 't:') {
        paramString += this.inputTerm;
      }

      console.log(paramString);
      this.formattedSearchTerms = paramString;

    }

    getSearchTerm(term) {
      if(term) {
        this.inputTerm += term.toString();
        console.log(term);
        console.log(term.type);
        console.log(this.inputTerm);
        console.log(this.formattedSearchTerms);
      } else {
        console.log(false);
        return false
      }
    }


    getMTGcards(term) {
     this.getSearchTerm(term)
     this.formatQuery(this.searchTerms);



     if(this.formattedSearchTerms === '()' && this.getSearchTerm(this.inputTerm) === false) {

       this.cardsService.getPlainMTGCardList().subscribe(response => {
          this.cardPage = response.json();
          this.cardList = [].concat.apply([], response.json().data);
          console.log('cardPage', this.cardPage);
          console.log('cardPage has more', this.cardPage['has_more']);
          console.log('cardPage next_page', this.cardPage['next_page']);
          console.log('cardList', this.cardList);
          this.formatCardList();
        });
     } else {
         this.cardsService.getMTGCardList(this.formattedSearchTerms).subscribe(response => {
           this.cardPage = response.json();
           this.cardList = [].concat.apply([], response.json().data);
           console.log('cardPage', this.cardPage);
           console.log('cardPage has more', this.cardPage['has_more']);
           console.log('cardPage next_page', this.cardPage['next_page']);
           console.log('cardList', this.cardList);
           this.formatCardList();
         });
       }
       this.formatCardList();
     }

    getNextPage(){
      let nextPage = this.cardPage['next_page'];
      this.cardsService.getMTGNextPage(nextPage).subscribe(response => {
        this.cardPage = response.json();
        this.cardList = this.cardList.concat.apply(this.cardList, response.json().data);
        // this.cardList.push(response.json().data);
        console.log('new cardPage', this.cardPage);
        console.log('new longer list', this.cardList);
      });
    }

    formatCardList() {
      this.cardList.forEach((ob) => {
        this.formattedCardList.push(new Card(ob.name, ob.colors, ob.type_line, ob.oracle_text, ob.rarity, ob.set_name, ob.image_uris.normal)
        )
      })
      console.log(this.formattedCardList);
    }



}
