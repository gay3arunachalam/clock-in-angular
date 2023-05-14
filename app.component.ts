import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'analog-clock';
  hsec = 0;
  hhour = 0;
  hmin = 0;
  d: Date | undefined;
  hourrotate: number | undefined;
  minrotate: number | undefined;
  secrotate: number | undefined;
  ngOnInit() {
    setInterval(() => {
      this.d = new Date();
      this.hhour = this.d.getHours();
      this.hmin = this.d.getMinutes();
      this.hsec = this.d.getSeconds();

      this.hourrotate = 30 * this.hhour + this.hmin / 2;
      this.minrotate = 6 * this.hmin;
      this.secrotate = 6 * this.hsec;
    }, 1000);
  }
}
