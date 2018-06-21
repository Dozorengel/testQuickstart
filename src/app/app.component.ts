import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

import { AboutComponent } from './about/about.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit  {
  constructor(private appService: AppService) {}

  pricelist: any;

  ngOnInit() {
    this.appService.getPriceList().subscribe(d => {
      this.pricelist = d.pricelist;
    });
  }

  getDynamicInput() {
    return AboutComponent;
  }

}
