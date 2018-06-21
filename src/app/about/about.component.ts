import { Component, OnInit, Input } from '@angular/core';

import { AppService } from './../app.service';

@Component({
  selector: 'app-about',
  template: `Say {{userName}}`,
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  constructor(private appService: AppService) { }

  pricelist: any;
  result: string = 'Hello';
  _userName: string;

  ngOnInit() {
    this.appService.getPriceList().subscribe(d => {
      this.pricelist = d.pricelist;
    });
  }

  @Input()
  set userName(age: string) {
    this._userName = age;
  }
  get userName() { return this._userName; }
}
