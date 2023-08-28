import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-random-number-component',
  templateUrl: './random-number-component.component.html',
  styleUrls: ['./random-number-component.component.scss'],
})
export class RandomNumberComponentComponent implements OnInit {
  randomNum: number | undefined;

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {}

  generateRandomNumber(): void {
    this.randomNum = this.dataService.getRandomNumber();
  }

  clearNumbers(): void {
    this.dataService.clearArray();
    this.randomNum = undefined;
  }
}
