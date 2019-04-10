import { Component, OnInit } from '@angular/core';
import { MtgCardsService } from '../mtg-cards.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DbService } from '../db.service';
import { schedule } from 'node-schedule';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  providers: [ MtgCardsService, DbService ]
})

export class CardListComponent implements OnInit {
  cardPage: any[] = [];
  cardList: any[] = [];
  hasMore: boolean = false;
  constructor(private cardsService: MtgCardsService, private dbService: DbService) { }

  ngOnInit() {
    // let timerId = setTimeout(function tick() {
    //   console.log('tick');
    //   timerId = setTimeout(tick, 5000);
    // }, 5000);
  }

  getMTGcards() {
    this.cardsService.getMTGCardList().subscribe(response => {
      this.cardPage = response.json().data;
      this.cardList.push(this.cardPage);
      this.getNextPage();
    });
  }

  getNextPage(){
    for (let i=2; i < (100) ; i++) {
      setTimeout( () => {
        let nextPage = `https://api.scryfall.com/cards?lang=en&page=${i}`;
        this.cardsService.getMTGNextPage(nextPage).subscribe(response => {
          this.cardPage = response.json().data;
          this.cardList.push(this.cardPage);
          console.log(this.cardPage);
        });
      }, 100);
    }
    setTimeout ( () => {
      let allPages = [].concat.apply([], this.cardList);
      console.log(allPages);
    }, 20000);
  }

  saveMTGcards(cardlist) {
    this.dbService.writeCards(cardlist);
  }

}
