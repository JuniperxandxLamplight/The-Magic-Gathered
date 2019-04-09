import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
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

  constructor() { }

  ngOnInit() {
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
