import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Injectable()
export class MtgCardsService {

  constructor(private http: Http) { }

  getMTGCardList(paramaters?) {
    return this.http.get(`https://api.scryfall.com/cards/search?lang=en&q=${paramaters}`);
  }

  getPlainMTGCardList() {
    return this.http.get(`https://api.scryfall.com/cards?lang=en`);
  }

  getMTGNextPage(nextPage) {
    return this.http.get(`${nextPage}`);
  }
}
