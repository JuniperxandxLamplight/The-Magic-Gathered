export class Card {
  public value: boolean = false;
  constructor(public name: string, public colors: any[], public type: string, public text: string, public rarity: string, public set: string, public image: string, public power?: number, public toughness?: number) {}
}
