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

  profesional: Profesional = new Profesional();
  private autorizado = false;
  nuevoPaciente: Paciente = new Paciente();




  insertaPaciente() {

    this.daoService.insertaPaciente(this.profesional, this.nuevoPaciente).subscribe(
      R => {

        if (!R) {


        } else {  // Login correcto, devuelve al profesional

        }
      }
      );

  }


  getProfesional() {
    const token = sessionStorage.getItem('token');
    this.daoService.getProfesional(token).subscribe(R => {
      if (!R) {  // Fracaso
        this.autorizado = false;
      } else {  // Exito
        this.autorizado = true;
        this.profesional.nombre = R.nombre;
        this.profesional.email = R.email;
      }
    });
  }


  ngOnInit() {
    this.getProfesional();
  }

}
