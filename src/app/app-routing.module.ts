import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { InsertcodeComponent } from './insertcode/insertcode.component';
import { RegistroprofesionalComponent } from './registroprofesional/registroprofesional.component';
import { PrincipalComponent } from './principal/principal.component';
import { PacienteDetailComponent } from './paciente-detail/paciente-detail.component';
import { PrincipalPacienteComponent } from './principal-paciente/principal-paciente.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'codigoRegistro', component: InsertcodeComponent },
  { path: 'nuevoProfesional', component: RegistroprofesionalComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'detallePaciente', component: PacienteDetailComponent },
  { path: 'principalPaciente', component: PrincipalPacienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
