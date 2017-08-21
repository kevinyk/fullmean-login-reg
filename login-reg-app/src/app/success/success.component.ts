import { Component, OnInit } from '@angular/core';
import { LoginregService } from './../loginreg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  currentUser: object = {name:""};
  constructor(private _loginRegService: LoginregService, private _router: Router) { }

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
      if(error.status==401){
        this._router.navigate(['/login'])
      }
  	})
  }

}
