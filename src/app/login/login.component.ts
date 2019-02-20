import { Component, OnInit } from '@angular/core';
import { DaoService } from '../dao/dao.service';
import {Router} from '@angular/router';

import { Profesional } from '../model/profesional';
import { Paciente } from '../model/paciente';
import { MessengerService } from '../services/messenger.service';

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
        console.log(R);
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
          this.messenger.sendProfesional(profesional);
          this.route.navigate(['principal']);

        } else if (R.rol === 'paciente') {  // Login correcto, devuelve al paciente
          const paciente = new Paciente();
          paciente.nombre = R.nombre;
          paciente.apellido = R.apellido;
          paciente.email = R.email;
          paciente.id = R.id;
          paciente.emailProfesional = R.emailProfesional;
          sessionStorage.setItem('token', R.token);
          this.route.navigate(['principalPaciente']);
        }
      }
      );

  }

  ngOnInit() {
  }

}
