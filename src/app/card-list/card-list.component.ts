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
  cardPage: any[] = [];
  cardList: any[] = [];
  hasMore: boolean = false;
  constructor(private cardsService: MtgCardsService, private dbService: DbService) { }

  ngOnInit() {
  }

  getMTGcards() {
    this.cardsService.getMTGCardList().subscribe(response => {
      this.cardPage = response.json().data;
      this.cardList.push(this.cardPage);
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
          this.cardPage = response.json().data;
          this.cardList.push(this.cardPage);
          console.log("body", response.json());
        });
      }, 100);
    }
    setTimeout ( () => {
      let newArray = this.combineArrays(this.cardList);
      console.log("card list", this.cardList);
      console.log("card list 0", this.cardList[0]);
      console.log("newArray", newArray);
      console.log(this.cardList.length);
    }, 3000);
  }

//ask franz!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  combineArrays(array) {
    let concatArr = [];

    console.log('concat in', array);

    array.forEach(function(arr) {
      console.log('concat inside', arr);

      concatArr.concat(arr);
    });
    // for (let i = 0; i < array.length; i++){
    //   console.log("for loop", array[i]);
    //   concatArr.concat(array[i]);
    // }
    console.log('concat', concatArr);
  }

  saveMTGcards(cardlist) {
    this.dbService.writeCards(cardlist);
  }



}
