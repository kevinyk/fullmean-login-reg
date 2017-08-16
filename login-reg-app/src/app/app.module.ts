import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginregComponent } from './loginreg/loginreg.component';
import { SuccessComponent } from './success/success.component';

import { LoginregService } from './loginreg.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginregComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginregService],
  bootstrap: [AppComponent]
})
export class AppModule { }
