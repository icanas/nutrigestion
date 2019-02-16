import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InsertcodeComponent } from './insertcode/insertcode.component';
import { RegistroprofesionalComponent } from './registroprofesional/registroprofesional.component';
import { PrincipalComponent } from './principal/principal.component';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { PacienteDetailComponent } from './paciente-detail/paciente-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InsertcodeComponent,
    RegistroprofesionalComponent,
    PrincipalComponent,
    PacientesListComponent,
    PacienteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Aqui esta el modulo NgModel
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
