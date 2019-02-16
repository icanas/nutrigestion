import { Component, OnInit } from '@angular/core';
import { DaoService } from '../dao/dao.service';
import {Router} from '@angular/router';

import { Profesional } from '../model/profesional';
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
        // let profesional = Object.assign(new Profesional(), R);  // aqui tengo a mi profesional de la base de datos
        if (!R) {
          this.valido = false;

        } else {  // Login correcto, devuelve al profesional
          const profesional = new Profesional();
          profesional.nombre = R.nombre;
          profesional.apellido = R.apellido;
          profesional.email = R.email;
          profesional.id = R.id;
          sessionStorage.setItem('token', R.token);
          this.messenger.sendProfesional(profesional);
          this.route.navigate(['principal']); ////// Cambiar a su ruta correcta, está aqui por debug
        }
      }
      );

  }

  ngOnInit() {
  }

}
