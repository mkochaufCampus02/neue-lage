import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dates: Array<Date> = 
  [
    new Date (2022,8,16),
    new Date (2022,8,17),
    new Date (2022,8,23),
    new Date (2022,8,30),
    new Date (2022,9,1),
    new Date (2022,9,7),
    new Date (2022,9,8),
    new Date (2022,9,14),
    new Date (2022,9,21),
    new Date (2022,9,22),
    new Date (2022,10,11),
    new Date (2022,10,12),
    new Date (2022,10,18),
    new Date (2022,10,25),
    new Date (2022,11,2),
    new Date (2022,11,16),
    new Date (2023,0,13),
    new Date (2023,0,14),
    new Date (2023,0,27),
    new Date (2023,0,28)
  ];

  public daysLeft: number;
  public remainingDays: Array<Date>;
  public passedDays: Array<Date>;

  ngOnInit(): void {
    
    setInterval(() => {
      let currentDate: Date = new Date();
      currentDate.setUTCHours(0,0,0,0);
      let remainingDates: Array<Date> = this.dates.filter(x=> x >= currentDate);
      this.daysLeft = remainingDates.length;
      this.remainingDays = remainingDates;
      this.passedDays = this.dates.filter(x=> x < currentDate);
    },1000)

  }

}
