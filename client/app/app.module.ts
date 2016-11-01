import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { WelcomeComponent , WelcomeService } from './welcome-form/index';

import { app_routing } from './app.routing';





@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpModule ,app_routing ],
  declarations: [ AppComponent , WelcomeComponent ],
  providers: [ WelcomeService ,{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap:    [ AppComponent ]
  
})

export class AppModule { }
