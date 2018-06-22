import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { AboutComponent } from './about/about.component';
import myGlobals = require('./app.globals');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  constructor(private appService: AppService) { }

  pricelist: any;

  ngOnInit() {
    this.appService.getPriceList().subscribe(d => {
      this.pricelist = myGlobals.pricelist = d.pricelist;
    });
  }

  getDynamicInput() {
    return AboutComponent;
  }

  mouseEnter(indexLine: string) {
    myGlobals.indexLine = indexLine;
    // console.log("mouse enter : " + indexLine + " " + myGlobals.indexLine);
  }

  mouseLeave(indexLine: string) { }
}
