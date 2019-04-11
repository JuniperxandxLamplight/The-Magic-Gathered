import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss']
})
export class DeckListComponent implements OnInit {Test: any;
  testList: any[] = [];
  nameList: any[] = [];
  colorList: any[] = [];


  constructor() { }

  ngOnInit() {
    for(let i=0; i<10; i++){
      this.testList.push(
        this.Test = {
        name: "Cabal Therapist",
        rarity: "rare",
        colors: ["U", "R", "B", "G", "W"],
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
        colors: ["G", "R", "W", "B"],
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
        name: "duuuuuuuude",
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
      this.testList.push(
        this.Test = {
        name: "duuuuuuuude",
        rarity: "rare",
        colors: ["U"],
        set_name: "Modern Horizons",
        mana_cost: "{B}",
        cmc: "8",
        prices: {eur:"14.89", usd: "15.83", usdFoil: "49.99"},
        type: "Creature",
        power: "5",
        toughness: "5",
        oracle_text: "Menace\nAt the beginning of your precombat main ..."
      });
      this.testList.push(
        this.Test = {
        name: "duuuuuuuude",
        rarity: "rare",
        colors: ["G"],
        set_name: "Modern Horizons",
        mana_cost: "{B}",
        cmc: "8",
        prices: {eur:"14.89", usd: "15.83", usdFoil: "49.99"},
        type: "Creature",
        power: "5",
        toughness: "5",
        oracle_text: "Menace\nAt the beginning of your precombat main ..."
      });
      this.testList.push(
        this.Test = {
        name: "duuuuuuuude",
        rarity: "rare",
        colors: [],
        set_name: "Modern Horizons",
        mana_cost: "{B}",
        cmc: "8",
        prices: {eur:"14.89", usd: "15.83", usdFoil: "49.99"},
        type: "Artifact",
        power: "5",
        toughness: "5",
        oracle_text: "Menace\nAt the beginning of your precombat main ..."
      });
      this.testList.push(
        this.Test = {
        name: "duuuuuuuude",
        rarity: "rare",
        colors: ["B"],
        set_name: "Modern Horizons",
        mana_cost: "{B}",
        cmc: "8",
        prices: {eur:"14.89", usd: "15.83", usdFoil: "49.99"},
        type: "Creature",
        power: "5",
        toughness: "5",
        oracle_text: "Menace\nAt the beginning of your precombat main ..."
      });
      this.testList.push(
        this.Test = {
        name: "duuuuuuuude",
        rarity: "rare",
        colors: ["W"],
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
  }

  color(card){
    let htmlClass: string;
    if(card.colors[1]){
      htmlClass = "multi";
    } else if(card.colors.length === 0){
      htmlClass = "colorless"
    } else{
      htmlClass = card.colors[0];
    }
    return htmlClass;
  }
  checkCover(card){
    let htmlClass: string;
    if(card.colors[1]){
      htmlClass = "multi" + "Cover";
    } else if(card.colors.length === 0){
      htmlClass = "colorless" + "Cover";
    }else{
      htmlClass = card.colors[0] + "Cover";
    }
    return htmlClass;
  }
  colorIcon(card, i){
    let colors: string;
    if(card.colors[4]){
      colors = "multi";
      return colors;
    } else{
      return card.colors[i];
    }
  }
  colorImgClass(card, i){
    let colors: string;
    if(card.colors[4]){
      colors = "multi";
      return "img" + colors + i;
    } else{
      return "img" + card.colors[i];
    }
  }

  imgMove(i){
    const leftMove: number = i * 50;
    return leftMove;
  }

  trunk(name){
    if(name.charAt(10)){
      let shortStr: string = name.substring(0, 11);
      let newStr: string = shortStr + "...";
      return newStr;
    } else{
      return name;
    }
  }

}
