import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class WelcomeService {
    constructor(private http: Http) { }

    save(user) {
        return this.http.post('/api/users', user )
        .map((response: Response) => {       
        });
    }

    imageUpload(item){
    	return this.http.post('/api/imageupload',item)
    	.map((response: Response) =>response.json());
    }
}