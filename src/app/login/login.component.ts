import { Component, OnInit } from '@angular/core';
import { DaoService } from '../dao/dao.service';
import {Router} from '@angular/router';

import { Profesional } from '../model/profesional';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private daoService: DaoService,
    private route: Router) { }

  email: string;
  password: string;
  valido = true;

  logIn() {

    this.daoService.login(this.email, this.password).subscribe(
      R => {
        // let profesional = Object.assign(new Profesional(), R);  // aqui tengo a mi profesional de la base de datos
        console.log(profesional);
        if (!R) {
          this.valido = false;

        } else {  // Login correcto, devuelve al profesional
          let profesional = new Profesional();
          profesional.nombre = R.nombre;
          profesional.apellido = R.apellido;
          profesional.email = R.email;
          profesional.id = R.id;
          profesional.dbName = R.dbName;
          this.route.navigate(['.']); ////// CAmbiar a su ruta correcta, está aqui por debug
        }
      }
      );

  }

  ngOnInit() {
  }

}
