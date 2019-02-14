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




  insertaPaciente() {

    this.daoService.insertaPaciente(this.profesional, this.nuevoPaciente).subscribe(
      R => {
        // let profesional = Object.assign(new Profesional(), R);  // aqui tengo a mi profesional de la base de datos
        if (!R) {


        } else {  // Login correcto, devuelve al profesional

        }
      }
      );

  }


  ngOnInit() {
    this.profesional = this.messenger.getProfesional();
  }

}
