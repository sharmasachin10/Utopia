import { Component, OnInit ,NgModule,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {ImageCropperComponent, CropperSettings, Bounds} from 'ng2-img-cropper';
import { ModalDirective  } from 'ng2-bootstrap/ng2-bootstrap';

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

    public cropperSettings:CropperSettings;
	public data:any;

    @ViewChild('cropper', undefined) cropper:ImageCropperComponent;
    
    @ViewChild('cropModal') cropModal:ModalDirective ;
 
  	constructor( private router: Router,private welcomeService : WelcomeService) {

	  	this.cropperSettings = new CropperSettings();
	    this.cropperSettings.width = 200;
	    this.cropperSettings.height = 200;

	    this.cropperSettings.croppedWidth = 200;
	    this.cropperSettings.croppedHeight = 200;

	    this.cropperSettings.canvasWidth = 500;
	    this.cropperSettings.canvasHeight = 300;

	    this.cropperSettings.minWidth = 200;
	    this.cropperSettings.minHeight = 200;

	    this.cropperSettings.rounded = false;

	    this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
	    this.cropperSettings.cropperDrawSettings.strokeWidth = 2;

	    this.data = {};

  	}

	ngOnInit() {
		this.file_srcs = '';
	  	this.person = {
	  		image:'',
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

  	step1(isValid: boolean,form) {
  		if(isValid){
    		this.shownext = false;
    		window.scrollTo(0,0);
    	}
  	}


    step2(form){

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


    fileChangeListener($event) {

	    let image:any = new Image();
	    let file:File = $event.target.files[0];
	    let myReader:FileReader = new FileReader();
	    let that = this;
	    
	    myReader.onloadend = function (loadEvent:any) {
	        image.src = loadEvent.target.result;
	        that.cropper.setImage(image);
	        that.cropModal.show();
	    };

	    myReader.readAsDataURL(file);
	}



	savecropImage(){
		this.file_srcs = this.data.image;
		let formData: FormData = new FormData();
        formData.append("image",this.dataURItoBlob(this.data.image));
        this.welcomeService.imageUpload(formData)
    		.subscribe(
	            data => {
	                this.person.image = data.name;
	                this.cropModal.hide();
	            },
	            error => {
	            	console.log(error);
	            });        
	}


	dataURItoBlob(dataURI) {
	    var byteString = atob(dataURI.split(',')[1]);
	    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
	    var ab = new ArrayBuffer(byteString.length);
	    var ia = new Uint8Array(ab);
	    for (var i = 0; i < byteString.length; i++) {
	        ia[i] = byteString.charCodeAt(i);
	    }
	    var bb = new Blob([ab],{type:mimeString });
	    return bb;
	}


}
