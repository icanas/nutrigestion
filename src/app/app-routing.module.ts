import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { InsertcodeComponent } from './insertcode/insertcode.component';
import { RegistroprofesionalComponent } from './registroprofesional/registroprofesional.component';
import { PrincipalComponent } from './principal/principal.component';
import { PacienteDetailComponent } from './paciente-detail/paciente-detail.component';
import { PrincipalPacienteComponent } from './principal-paciente/principal-paciente.component';
import { PacienteDietaComponent } from './paciente-dieta/paciente-dieta.component';
import { DietaVisorComponent } from './dieta-visor/dieta-visor.component';
import { ProgesoComponent } from './progeso/progeso.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'codigoRegistro', component: InsertcodeComponent },
  { path: 'nuevoProfesional', component: RegistroprofesionalComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'detallePaciente', component: PacienteDetailComponent },
  { path: 'principalPaciente', component: PrincipalPacienteComponent},
  { path: 'pacienteDieta', component: PacienteDietaComponent },
  { path: 'dietaVisor', component: DietaVisorComponent },
  { path: 'progreso', component: ProgesoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
