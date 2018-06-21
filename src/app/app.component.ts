import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  constructor(private appService: AppService) { 
    // this.text = 'Other World';
  }

  pricelist: any;
  name:string="Tom";

  ngOnInit() {
    this.appService.getPriceList().subscribe(d => {
      this.pricelist = d.pricelist;
    });
  }

  getDynamicInput() {
    return AboutComponent;
  }

  mouseEnter(div: string) {
    console.log("mouse enter : " + div);
    // this.text = 'Enter';
  }

  mouseLeave(div: string) {
    console.log('mouse leave :' + div);
    // this.text = 'Leave';
  }

}
