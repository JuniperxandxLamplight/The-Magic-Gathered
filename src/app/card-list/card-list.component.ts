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
  cardList: any;
  hasMore: boolean = false;
  nextCall: string;
  totalCards: number;
  constructor(private cardsService: MtgCardsService, private dbService: DbService) { }

  ngOnInit() {
  }

  getMTGcards() {
    this.cardsService.getMTGCardList().subscribe(response => {
      this.cardList = response.json().data;
      this.hasMore = response.json().has_more;
      this.nextCall = response.json().next_page;
      this.totalCards = response.json().total_cards;
      console.log("body", response.json().data);
      console.log("response", response.json());
      this.getNextPage();
    });
  }

  getNextPage(){
    for (let i=0; i < (2000/175) ; i++) {
      if (this.hasMore === true) {
        this.cardsService.getMTGNextPage(this.nextCall).subscribe(response => {
          this.cardList = response.json().data;
          this.hasMore = response.json().has_more;
          this.nextCall = response.json().next_page;
          console.log("body", response.json());
        });
      }
    }
  }

  saveMTGcards(cardlist) {
    this.dbService.writeCards(cardlist);
  }



}
