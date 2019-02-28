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
  private autorizado = false;
  nuevoPaciente: Paciente = new Paciente();




  insertaPaciente() {

    this.daoService.insertaPaciente(this.profesional, this.nuevoPaciente).subscribe(
      R => {

        if (!R) {

          alert('Error');

        } else {  // Login correcto, devuelve al profesional
          // window.location.reload();
          this.modalRef.hide();
          localStorage.removeItem('Paciente');
          localStorage.setItem('Paciente', JSON.stringify(this.nuevoPaciente));
          this.route.navigate(['detallePaciente']);
        }
      }
      );

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
      }
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  ngOnInit() {
    this.getProfesional();
  }

}
