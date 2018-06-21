import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AppService } from './app.service';

import { FormsModule } from '@angular/forms';
import { PopoverModule } from './ng2-popover/popover.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, PopoverModule ],
  declarations: [ AppComponent, AboutComponent ],
  providers:    [ AppService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
