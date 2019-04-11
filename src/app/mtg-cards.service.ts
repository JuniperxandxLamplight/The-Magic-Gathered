import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class MtgCardsService {

  constructor(private http: Http) { }

  getMTGCardList(paramaters?) {
    let search = this.http.get(`https://api.scryfall.com/cards?lang=en`);
    let baseSearch: string = "https://api.scryfall.com/cards/search?lang=en";
    console.log(baseSearch + '&power=3');
    return search;
    // let baseApi = this.http.get(`https://api.scryfall.com/cards/search?lang=en`);
    // let searchName = name;
    // let searchColors = colors;
    // let searchCardType = cardType;
    // let searchSubType = subType
    // let searchText = text;
    // let searchRarity = rarity;
    // let searchSet = set;
    // let searchPower = power;
    // let searchToughness = toughness;
    // console.log(searchName);
  }

  getMTGNextPage(nextPage) {
    return this.http.get(`${nextPage}`);
  }
}
