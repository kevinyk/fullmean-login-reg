import { Component, OnInit } from '@angular/core';
import { LoginregService } from './../loginreg.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loginreg',
  templateUrl: './loginreg.component.html',
  styleUrls: ['./loginreg.component.css']
})
export class LoginregComponent implements OnInit {
  newUser: object = {name: "", email: "", password: "", password_confirmation:""}
  constructor(private _logRegService: LoginregService, private _router: Router) { }

  ngOnInit() {
  }
  register(aUser){
  	console.log("in component's register");
  	console.log(aUser);
  	this._logRegService.newUser(aUser)
  	.then((response)=>{
  		console.log("then");
  		console.log(response);
  		this._router.navigate(['/success']);
  	})
  	.catch((error)=>{
  		console.log("catch");
  		console.log(error);
  	})
  }


}
