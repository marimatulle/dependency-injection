import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public array: number[] = [];

  constructor() { }

  public getRandomNumber(): number {
    return this.array.push(Math.floor(Math.random() * 100) + 1);
  }

  public getItemsArray() {
    return this.array;
  }

  public clearArray() {
    this.array = [];
    return this.array;
  }
}
