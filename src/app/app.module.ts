import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InsertcodeComponent } from './insertcode/insertcode.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InsertcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Aqui esta el modulo NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
