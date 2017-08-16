import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginregService {

  constructor(private _http: Http) { }
  newUser(user){
  	console.log("in service's newUser method")
  	return this._http.post('/api/users', user)
  	.map(Response=>Response.json()).toPromise();
  }
  getCurrentUser(){
  	return this._http.get('/api/current_user')
  	.map(Response=>Response.json()).toPromise();
  }
}
