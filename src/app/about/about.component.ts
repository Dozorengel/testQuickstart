import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';

import { AppService } from './../app.service';
import myGlobals = require('./../app.globals');
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  template: `<div [innerHTML]="result"></div>`,
  // template: `<div [innerHTML]="result | safeHtml"></div>`,
  // templateUrl: './about.component.html',
  // styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  result: SafeHtml;

  constructor(private appService: AppService) {
    this.result = myGlobals.indexLine;
  }

  ngOnInit() {
    // console.log(myGlobals.pricelist[myGlobals.indexLine].description_ru);
    this.result = myGlobals.pricelist[myGlobals.indexLine].description_ru;
    if (this.result == "") this.result = "No description"
  }

  // @Pipe({ name: 'safeHtml' })
  // export class SafeHtmlPipe implements PipeTransform {
  //   constructor(private sanitized: DomSanitizer) { }
  //   transform(value: string) {
  //     console.log(this.sanitized.bypassSecurityTrustHtml(value))
  //     return this.sanitized.bypassSecurityTrustHtml(value);
  //   }
  // }
}