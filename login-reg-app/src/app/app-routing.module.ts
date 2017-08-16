import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginregComponent } from './loginreg/loginreg.component';
import { SuccessComponent } from './success/success.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
  	path: 'login',
  	component: LoginregComponent
  },
  {
  	path: 'success',
  	component: SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
