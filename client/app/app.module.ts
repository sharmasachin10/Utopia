import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import {ImageCropperComponent} from 'ng2-img-cropper';


import { EqualValidator } from './equal-validator.directive';
import { AppComponent }   from './app.component';
import { WelcomeComponent , WelcomeService } from './welcome-form/index';


import { app_routing } from './app.routing';





@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpModule ,app_routing ,ModalModule],
  declarations: [ AppComponent , WelcomeComponent ,EqualValidator,ImageCropperComponent],
  providers: [ WelcomeService ,{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap:    [ AppComponent ]
  
})

export class AppModule { }
