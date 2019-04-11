import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user-data.model'


@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss']
})
export class DeckListComponent implements OnInit {Test: any;
  testList: any[] = [];
  nameList: any[] = [];
  colorList: any[] = [];
  @Input() user: User;

  constructor() { }

  ngOnInit() {
    for(let i=0; i<10; i++){
      this.testList.push(
        this.Test = {
        name: "Cabal Therapist",
        rarity: "rare",
        colors: ["U"],
        set_name: "Modern Horizons",
        mana_cost: "{B}",
        cmc: "1",
        prices: {eur:"14.89", usd: "15.83", usdFoil: "49.99"},
        type: "Creature",
        power: "1",
        toughness: "1",
        oracle_text: "Menace\nAt the beginning of your precombat main ..."
      });
      this.testList.push(
        this.Test = {
        name: "Green Dude",
        rarity: "rare",
        colors: ["G"],
        set_name: "Modern Horizons",
        mana_cost: "{B}",
        cmc: "3",
        prices: {eur:"14.89", usd: "15.83", usdFoil: "49.99"},
        type: "Creature",
        power: "3",
        toughness: "4",
        oracle_text: "Menace\nAt the beginning of your precombat main ..."
      });
      this.testList.push(
        this.Test = {
        name: "Red Dude",
        rarity: "rare",
        colors: ["R"],
        set_name: "Modern Horizons",
        mana_cost: "{B}",
        cmc: "8",
        prices: {eur:"14.89", usd: "15.83", usdFoil: "49.99"},
        type: "Creature",
        power: "5",
        toughness: "5",
        oracle_text: "Menace\nAt the beginning of your precombat main ..."
      });
    }

    // for(let i=0; i>this.testList.length; i++){
    //   const card = document.getElementById(`${i}`);
    //   console.log(i);
    //   card.setAttribute('top', `${i * 20}`);
    // }
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
