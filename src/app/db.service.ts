import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { MtgCardsService } from './mtg-cards.service';

@Injectable()
export class DbService {

  cards: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.cards = af.list('cards');
  }

  deleteCards() {
    this.af.object('/cards/').remove();
  }

  writeCards(cardList) {
    this.deleteCards();
    this.cards.push(cardList);
  }

}
