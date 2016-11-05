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
  	public file_srcs: string;
    public files: string[] =[];
    public artCategory: any[] = []; 


  	constructor( private router: Router,private welcomeService : WelcomeService) { }

	ngOnInit() {
	  	this.person = {
	  		name: '',
	    	email: '',
	    	password: '',
	    	confirmPassword: '',
	    	age: null,
	    	gender: '',
	   		profession: '',
	    	about: '',
	    	city: '',
	    	news: '',
	    	art: [],
	    	health: '',
	    	food: '',
	    	sports: '',
	    	technology: ''
	  	};

		this. artCategory =  [{
			name: 'Photography',
			select: false
		}, {
			name: 'Poetry',
			select: false
		}, {
			name: 'Sculpture',
			select: false
		}, {
			name: 'History',
			select: false
		}, {
			name: 'Literature',
			select: false
		}, {
			name: 'Architecture',
			select: false
		}, {
			name: 'Films',
			select: false
		}, {
			name: 'Theater',
			select: false
		}];
  	}

  	shownext = true;
    

  	artvalue(value,i){
  		this.artCategory.forEach(function(item,index) {
    		if(index===i){
    			item.select = (item.select==true?false:true);
    		}
		});
  		this.person.art = this.artCategory;
  	}

  	step1(isValid: boolean) {
  		if(isValid){
    		this.shownext = false;
    		window.scrollTo(0,0);
    	}
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


    

    fileChange(input){

        // Loop through each picture file
        for (var i = 0; i < input.files.length; i++) {

            this.files.push(input.files[i]);

            // Create an img element and add the image file data to it
            var img = document.createElement("img");
            img.src = window.URL.createObjectURL(input.files[i]);

            // Create a FileReader
            var reader: any, target: EventTarget;
            reader = new FileReader();

            // Add an event listener to deal with the file when the reader is complete
            reader.addEventListener("load", (event) => {
                // Get the event.target.result from the reader (base64 of the image)
                img.src = event.target.result;

                // Resize the image
                var resized_img = img;

                // Push the img src (base64 string) into our array that we display in our html template
                this.file_srcs = img.src;
                console.log(this.file_srcs);
            }, false);

            reader.readAsDataURL(input.files[i]);
        }
    }




}
