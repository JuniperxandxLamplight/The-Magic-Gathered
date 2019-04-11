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

  hasMore: boolean = false;
  allPages;
  constructor(private cardsService: MtgCardsService, private dbService: DbService) { }

  ngOnInit() {
  }


  getShallowCardInfo() {
    //name supertype color
    // console.log(this.cardList[0].name + this.cardList[0].mana_cost);

  }

  // saveMTGcards(cardlist) {
  //   this.dbService.writeCards();
  // }
  //
  // deleteUsers() {
  //   this.dbService.deleteUsers();
  // }

}
