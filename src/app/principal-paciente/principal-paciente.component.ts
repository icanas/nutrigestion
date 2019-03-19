import { Component, OnInit, TemplateRef } from '@angular/core';
import { Paciente } from '../model/paciente';
import { Cita } from '../model/cita';
import { DaoService } from '../dao/dao.service';

import {Router} from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-principal-paciente',
  templateUrl: './principal-paciente.component.html',
  styleUrls: ['./principal-paciente.component.css']
})
export class PrincipalPacienteComponent implements OnInit {

  constructor(
    private daoService: DaoService,
    private modalService: BsModalService,
    private route: Router
  ) { }

  paciente: Paciente = new Paciente();
  cita: Cita = new Cita();
  autorizado = false;
  proximaCita = false;


  modalRef: BsModalRef;


  getPaciente() {
    const token = sessionStorage.getItem('token');
    this.daoService.getPaciente(token).subscribe(
      R => {
      if (!R) {  // Fracaso
        this.autorizado = false;
      } else {  // Exito
        this.autorizado = true;
        this.paciente.nombre = R.nombre;
        this.paciente.email = R.email;
        this.paciente.emailProfesional = R.emailProfesional;
        this.getCitaPacienteActiva();
      }
    });
  }

  getCitaPacienteActiva() {

    this.daoService.getCitaPacienteActiva(this.paciente).subscribe(
      R => {
        if (!R) {
          this.proximaCita = false;
        } else {
          this.proximaCita = true;
          this.cita = R;
        }

      }
    );

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  verDieta() {

    localStorage.removeItem('dieta');

    this.daoService.getDietas(this.paciente).subscribe(
      R => {
        if (R.length !== 0) {
          if (Number(R[0].activo) !== 0) {

            localStorage.setItem('dieta', JSON.stringify(R[0]));
            this.route.navigate(['dietaVisor']);

          } else {
            window.alert('No tienes dietas asignadas');
          }
        } else {
          window.alert('No tienes dietas asignadas');
        }
      }
    );


  }


  ngOnInit() {
    this.getPaciente();
  }

}
