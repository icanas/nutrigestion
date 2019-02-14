import { Component, OnInit } from '@angular/core';

import { Profesional } from '../model/profesional';
import { Paciente } from '../model/paciente';
import { MessengerService } from '../services/messenger.service';
import { DaoService } from '../dao/dao.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(
    private messenger: MessengerService,
    private daoService: DaoService,
  ) { }

  private profesional: Profesional;
  nuevoPaciente: Paciente = new Paciente();
  a: string;



  insertaPaciente() {

    this.daoService.login(this.a, this.a).subscribe(
      R => {
        // let profesional = Object.assign(new Profesional(), R);  // aqui tengo a mi profesional de la base de datos
        if (!R) {


        } else {  // Login correcto, devuelve al profesional
          const profesional = new Profesional();
          profesional.nombre = R.nombre;
          profesional.apellido = R.apellido;
          profesional.email = R.email;
          profesional.id = R.id;
          profesional.dbName = R.dbName;
          this.messenger.sendProfesional(profesional);
          // this.route.navigate(['principal']); ////// Cambiar a su ruta correcta, está aqui por debug
        }
      }
      );

  }


  ngOnInit() {
    this.profesional = this.messenger.getProfesional();
  }

}
