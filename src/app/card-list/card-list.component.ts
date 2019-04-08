import { Component, OnInit } from '@angular/core';
import { MtgCardsService } from '../mtg-cards.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DbService } from '../db.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  providers: [ MtgCardsService, DbService ]
})

export class CardListComponent implements OnInit {
  cardList: any[];
  hasMore: boolean = false;
  nextCall: string = null;
  totalCards: number;
  constructor(private cardsService: MtgCardsService, private dbService: DbService) { }

  ngOnInit() {
  }

  getMTGcards() {
    this.cardsService.getMTGCardList().subscribe(response => {
      console.log("before first", this.nextCall);
      this.cardList = response.json().data;
      console.log("begining of next call", response.json().data[0]);
      console.log("body", response.json().data);
      console.log("response", response.json());
      this.getNextPage();
    });
  }

  getNextPage(){
    for (let i=2; i < (5) ; i++) {
      setTimeout( () => {
        let nextPage = `https://api.scryfall.com/cards?lang=en&page=${i}`;
        this.cardsService.getMTGNextPage(nextPage).subscribe(response => {
          this.cardList = response.json().data;
          console.log("body", response.json());
        });
      }, 100);
    }
  }

  saveMTGcards(cardlist) {
    this.dbService.writeCards(cardlist);
  }



}
