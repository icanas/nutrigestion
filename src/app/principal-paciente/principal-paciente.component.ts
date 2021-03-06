import { Component, OnInit, TemplateRef } from '@angular/core';
import { Paciente } from '../model/paciente';
import { Cita } from '../model/cita';
import { Metricas } from '../model/metricas';
import { Anatomia } from '../model/anatomia';
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
  progreso = false;

  desfase: number;

  anatomiaList: Anatomia[] = [];
  metricasList: Metricas[] = [];


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
        this.getAnatomiayProgreso();
      }
    });
  }

  getCitaPacienteActiva() {

    this.daoService.getCitaPacienteActiva(this.paciente).subscribe(
      R => {
        if (!R) {
          this.proximaCita = false;
        } else {
          const dateTimeParts = String(R.fecha).split(/[-: ]/);
          const date = new Date(Number(dateTimeParts[0]) , Number(dateTimeParts[1]),
          Number(dateTimeParts[2]),  Number(dateTimeParts[3]),  Number(dateTimeParts[4]));
          this.desfase = (date.getTimezoneOffset() * -1) / 60;
          this.cita.fecha = date;

          this.proximaCita = true;
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
        if (R !== null) {
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

  getAnatomiayProgreso() {

    this.daoService.getAnatomia(this.paciente).subscribe (
      R => {
        if (R !== null) {
          this.anatomiaList = R;
          this.anatomiaList.reverse();
          this.daoService.getMetricas(this.paciente).subscribe(
            M => {
              if (M !== null) {
                this.metricasList = M;
                this.progreso = true;
                localStorage.removeItem('anatomiaList');
                localStorage.removeItem('metricasList');
                localStorage.setItem('anatomiaList', JSON.stringify(this.anatomiaList));
                localStorage.setItem('metricasList', JSON.stringify(this.metricasList));
              }
            }
          );
        }
      }
    );
  }

  email() {
    window.location.href = 'mailto:' + this.paciente.emailProfesional;
  }


  ngOnInit() {
    this.getPaciente();
  }

}
