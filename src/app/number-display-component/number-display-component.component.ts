import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-number-display-component',
  templateUrl: './number-display-component.component.html',
  styleUrls: ['./number-display-component.component.scss'],
})
export class NumberDisplayComponentComponent implements OnInit {
  showRandomNumber!: number[];

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.showRandomNumber = this.dataService.getItemsArray();
  }
}
