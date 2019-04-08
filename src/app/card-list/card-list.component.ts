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
  cardlist: any;
  constructor(private cardsService: MtgCardsService, private dbService: DbService) { }

  ngOnInit() {
  }

  getMTGcards() {
    this.cardsService.getMTGCardList().subscribe(response => {
      this.cardlist = response.json();
      console.log("body", response.json().data);
    });
  }

  saveMTGcards(cardlist) {
    this.dbService.writeCards(cardlist);
  }



}
