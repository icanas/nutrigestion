import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Profesional } from '../model/profesional';
import { Paciente } from '../model/paciente';
import { MessengerService } from '../services/messenger.service';
import { DaoService } from '../dao/dao.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(
    private messenger: MessengerService,
    private daoService: DaoService,
    private modalService: BsModalService,
    private route: Router
  ) { }


  modalRef: BsModalRef;

  profesional: Profesional = new Profesional();
  autorizado = false;
  nuevoPaciente: Paciente = new Paciente();




  insertaPaciente() {

    this.daoService.insertaPaciente(this.profesional, this.nuevoPaciente).subscribe(
      R => {

        if (!R) {

          alert('Error');

        } else {  // Login correcto, devuelve al profesional
          // window.location.reload();
          this.nuevoPaciente.emailProfesional = this.profesional.email;
          this.modalRef.hide();
          localStorage.removeItem('Paciente');
          localStorage.setItem('Paciente', JSON.stringify(this.nuevoPaciente));
          this.route.navigate(['detallePaciente']);
        }
      }
      );

  }

  dietasPredeterminadas() {

    localStorage.removeItem('Paciente');
    localStorage.setItem('Paciente', JSON.stringify(this.profesional));
    this.route.navigate(['pacienteDieta']);

  }


  getProfesional() {
    const token = sessionStorage.getItem('token');
    this.daoService.getProfesional(token).subscribe(
      R => {
      if (!R) {  // Fracaso
        this.autorizado = false;
      } else {  // Exito
        this.autorizado = true;
        this.profesional.nombre = R.nombre;
        this.profesional.email = R.email;
        localStorage.removeItem('profesionalData');
        localStorage.setItem('profesionalData', JSON.stringify(this.profesional));

      }
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  checkNumber($event) {
    let caracter;
    caracter = $event.keyCode;

    if (caracter === 188 || caracter === 110) {
      $event.target.value = $event.target.value + '.';
    }

    return ((caracter > 47 && caracter < 58) || (caracter >= 96 && caracter <= 105) ||
    caracter === 190 || caracter === 37 ||
    caracter === 39 || caracter === 9 || caracter === 8) || caracter === 38 || caracter === 40;


  }

  ngOnInit() {
    this.getProfesional();
    this.nuevoPaciente.sexo = 'h';
  }

}
