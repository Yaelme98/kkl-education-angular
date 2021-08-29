import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})

export class FacilitiesComponent implements OnInit {
  public timesArray: Array<string | number> = [];

  constructor() { }

  ngOnInit(): void {
    this.fillTimes();
  }

  fillTimes(): void {
    for (let i = 0; i < 24; i++) {
      if (i < 10) {
        this.timesArray.push(`0${i}:00`);
      } else {
        this.timesArray.push(`${i}:00`);
      }
    }
  }

}
