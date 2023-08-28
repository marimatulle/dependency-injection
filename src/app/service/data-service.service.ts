import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public array: number[] = [];

  constructor() { }

  public getRandomNumber(): number {
    const randomNumber = Math.floor(Math.random() * 100);
    this.array.push(randomNumber);
    return randomNumber;
  }

  public getItemsArray() {
    return this.array;
  }

  public clearArray() {
    this.array = [];
    return this.array;
  }
}
