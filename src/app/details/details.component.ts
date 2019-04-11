import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { UserService } from '../user.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [ UserService ]
})
export class DetailsComponent implements OnInit {
  Test: any = {
    name: "Cabal Therapist",
    rarity: "rare",
    colors: ["U"],
    set_name: "Modern Horizons",
    mana_cost: "{B}",
    prices: {eur:"14.89", usd: "15.83", usdFoil: "49.99"},
    type_line: "Creature — Horror",
    power: "1",
    toughness: "1",
    oracle_text: "Menace\nAt the beginning of your precombat main ..."
  }
  currentUser;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  addCardToDeck() {
    console.log("add card to deck");
  }

  addCardToLibrary(card) {
    console.log("add card to library");
    this.userService.addCardToUserLibrary(card);
  }

  colorTranslate(card){
    let colors:any[] = [];
    for(let i=0; i<card.colors.length; i++){
      if(card.colors[i] === "R"){
        colors.push('Red');
      } else if(card.colors[i] === "W"){
        colors.push('White');
      } else if(card.colors[i] === "U"){
        colors.push('Blue');
      } else if(card.colors[i] === "G"){
        colors.push('Green');
      } else if(card.colors[i] === "B"){
        colors.push('Black');
      }
    }
    return colors;
  }

  color(card){
    let htmlClass: string;
    if(card.colors[1]){
      htmlClass = "multi";
    } else{
      htmlClass = card.colors[0];
    }
    return htmlClass;
  }

}
