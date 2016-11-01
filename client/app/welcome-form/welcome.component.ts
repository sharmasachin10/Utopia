import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Steps } from './steps.interface';

import { WelcomeService } from './welcome.service';


@Component({ 
  moduleId: module.id,
  templateUrl: 'welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  	public person : Steps;  
  	
  	constructor( private router: Router,private welcomeService : WelcomeService) { }

	ngOnInit() {
	  	this.person = {
	  		name: '',
	    	email: '',
	    	password: '',
	    	age: null,
	    	gender: '',
	   		profession: '',
	    	about: '',
	    	city: '',
	    	news: '',
	    	art: '',
	    	health: '',
	    	food: '',
	    	sports: '',
	    	technology: ''
	  	};
  	}

  	shownext = true;
    
  	artvalue(value){
  		this.person.art = value;
  	}

  	step1() {
    	this.shownext = false;
    	window.scrollTo(0,0);
  	}


    step2(){
    	this.welcomeService.save(this.person)
    		.subscribe(
	            data => {
	                 alert('Successfully Save');
	                 this.ngOnInit();
	                 this.shownext = true;
	                 window.scrollTo(0,0);
	            },
	            error => {
	            	console.log(error);
	            }); 
       
    }


}
