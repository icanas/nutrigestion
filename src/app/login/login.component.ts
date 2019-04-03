import { Component, OnInit } from '@angular/core';
import { DaoService } from '../dao/dao.service';
import {Router} from '@angular/router';

import { Profesional } from '../model/profesional';
import { Paciente } from '../model/paciente';
import { Metricas } from '../model/metricas';
import { Anatomia } from '../model/anatomia';
import { MessengerService } from '../services/messenger.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private daoService: DaoService,
    private messenger: MessengerService,
    private route: Router) { }

  email: string;
  password: string;
  valido = true;

  logIn() {

    this.daoService.login(this.email, this.password).subscribe(
      R => {
        // let profesional = Object.assign(new Profesional(), R);  // aqui tengo a mi profesional de la base de datos
        if (!R) {
          this.valido = false;

        } else if (R.rol === 'profesional') {  // Login correcto, devuelve al profesional
          const profesional = new Profesional();
          profesional.nombre = R.nombre;
          profesional.apellido = R.apellido;
          profesional.email = R.email;
          profesional.id = R.id;
          sessionStorage.setItem('token', R.token);
          // this.messenger.sendProfesional(profesional);
          this.route.navigate(['principal']);

        } else if (R.rol === 'paciente') {  // Login correcto, devuelve al paciente
          const paciente = new Paciente();
          paciente.nombre = R.nombre;
          paciente.apellido = R.apellido;
          paciente.email = R.email;
          paciente.id = R.id;
          paciente.emailProfesional = R.emailProfesional;
          sessionStorage.setItem('token', R.token);
          this.getAnatomiayProgreso(paciente);
        }
      }
      );

  }

  getAnatomiayProgreso(paciente: Paciente) {
    let anatomiaList: Anatomia[] = [];
    let metricasList: Metricas[] = [];

    this.daoService.getAnatomia(paciente).subscribe (
      R => {
        if (R !== null) {
          anatomiaList = R;
          this.daoService.getMetricas(paciente).subscribe(
            M => {
              if (M !== null) {
                metricasList = M;
                localStorage.removeItem('anatomiaList');
                localStorage.removeItem('metricasList');
                localStorage.setItem('anatomiaList', JSON.stringify(anatomiaList));
                localStorage.setItem('metricasList', JSON.stringify(metricasList));
              }
              this.route.navigate(['principalPaciente']);
            }
          );
        }
        this.route.navigate(['principalPaciente']);
      }
    );



  }


  ngOnInit() {
  }

}
