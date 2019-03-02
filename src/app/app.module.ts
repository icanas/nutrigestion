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
import { PrincipalPacienteComponent } from './principal-paciente/principal-paciente.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MedidasComponent } from './medidas/medidas.component';
import { MetricasComponent } from './metricas/metricas.component';
import { PacienteDietaComponent } from './paciente-dieta/paciente-dieta.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InsertcodeComponent,
    RegistroprofesionalComponent,
    PrincipalComponent,
    PacientesListComponent,
    PacienteDetailComponent,
    PrincipalPacienteComponent,
    MedidasComponent,
    MetricasComponent,
    PacienteDietaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Aqui esta el modulo NgModel
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
