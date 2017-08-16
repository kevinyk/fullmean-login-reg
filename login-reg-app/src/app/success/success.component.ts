import { Component, OnInit } from '@angular/core';
import { LoginregService } from './../loginreg.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  currentUser: object = {name:""};
  constructor(private _loginRegService: LoginregService) { }

  ngOnInit() {
  	this._loginRegService.getCurrentUser()
  	.then((response)=>{
  		console.log("then");
  		console.log(response);
  		this.currentUser = response;
  	})
  	.catch((error)=>{
  		console.log("catch");
  		console.log(error);
  	})
  }

}
