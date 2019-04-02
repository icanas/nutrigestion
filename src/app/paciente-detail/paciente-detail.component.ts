import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {Router} from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Paciente } from '../model/paciente';
import { MessengerService } from '../services/messenger.service';
import { DaoService } from '../dao/dao.service';
import { Cita } from '../model/cita';
import { Patologia } from '../model/patologia';
import { Anatomia } from '../model/anatomia';
import { Metricas } from '../model/metricas';
import { MetricasComponent } from '../metricas/metricas.component';

@Component({
  selector: 'app-paciente-detail',
  templateUrl: './paciente-detail.component.html',
  styleUrls: ['./paciente-detail.component.css']
})
export class PacienteDetailComponent implements OnInit {

  constructor(
    private messenger: MessengerService,
    private daoService: DaoService,
    private route: Router,
    private modalService: BsModalService,
  ) { }

  @ViewChild(MetricasComponent) metricasComponent: MetricasComponent;
  paciente: Paciente;

  cita: Cita = new Cita();  // Para nueva cita
  citas: Cita[] = [];
  citaActiva: Cita = new Cita();
  conCita = false;

  fecha: Date;
  hora: number;
  minuto: number;

  patologiasPaciente: Patologia[] = [];
  listaPatologias: Patologia[] = [];

  anatomia: Anatomia = new Anatomia();
  anatomiaList: Anatomia[] = [];

  metricas: Metricas = new Metricas(this.paciente, this.anatomia);

  modalRef: BsModalRef;
  modalRefPatologias: BsModalRef;



  addCita() {

    this.fecha.setHours(this.hora);
    this.fecha.setMinutes(this.minuto);
    this.fecha.setSeconds(0);
    this.cita.fecha = this.fecha;


    this.daoService.addCita(this.paciente, this.cita).subscribe(
      R => {

        if (!R) {
          alert('Fecha Errónea');
        } else {
          alert('Nueva Cita para ' + this.fecha);
          window.location.reload();
        }

    });

  }

  cancelCita(cita: Cita) {

    this.daoService.cancelCita(cita).subscribe(
      R => {
        if (!R) {
          alert('Imposible eliminar la cita');
        } else {
          alert('Cita cancelada');
          window.location.reload();
        }
      }
    );

  }

  desactivarPaciente() {

    const respuesta = prompt('Escribe "si" para confirmar la desactivacion del paciente');
    console.log(this.paciente);

    if (respuesta === 'si') {

      this.daoService.desactivaPaciente(this.paciente).subscribe(
        R => {
          if (!R) {
            alert('Imposible eliminar paciente');
          } else {
            alert('Paciente desactivado');
            this.route.navigate(['principal']);
          }
        }
      );
    } else {
      alert('El paciente no se desactivará');
    }

  }

  getCitaPacienteAll() {

    this.daoService.getCitaPacienteAll(this.paciente).subscribe(
      R => {
        this.citas = R;
        this.paciente.citas = R;
        if (R[0].activo === '1') {
          this.citaActiva = R[0];
          this.conCita = true;
        }

      }
    );

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalPatologias(templatePatologias: TemplateRef<any>) {
    this.modalRefPatologias = this.modalService.show(templatePatologias);
  }

  dietas() {
    this.route.navigate(['pacienteDieta']);
  }

  getListaPatologias() {

    this.daoService.getListaPatologias().subscribe(
      R => {
        this.listaPatologias = R;

        this.daoService.getListaPatologiasPaciente(this.paciente).subscribe(
          P => {
            if (P != null) {
              this.patologiasPaciente = P;

              this.patologiasPaciente.forEach(
                F => {
                  this.listaPatologias[F.id].checked = true;
                }
              );
            }

          }
        );

      }
    );

  }


  changePatologias(event, patologia: Patologia) {

    if ( event.target.checked ) { // Añado el elemento
      this.patologiasPaciente.push(patologia);
    } else {  // Quito el elemento
      const posicion = this.patologiasPaciente.findIndex(
        F => F === patologia
        );
      this.patologiasPaciente.splice(posicion, 1);
    }
  }

  actualizaPatologias() {
    this.daoService.actualizaPatologias(this.paciente, this.patologiasPaciente).subscribe(
      R => {
        window.location.reload();
      }
    );
  }

  getAnatomia() {

    this.daoService.getAnatomia(this.paciente).subscribe(
      R => {
        if (!R) {
          this.anatomia = new Anatomia();
        } else {
          this.anatomiaList = R;
          this.anatomia = R[0];
          this.paciente.anatomia = this.anatomia;
          this.metricas = new Metricas(this.paciente, this.anatomia);
          localStorage.setItem('Paciente', JSON.stringify(this.paciente));  // Lo guardo en local con sus medidas
        }

      }
    );

  }

  recalculaMetricas(anatomia: Anatomia) {
    this.anatomia = anatomia;
    this.metricas = new Metricas(this.paciente, this.anatomia);
    console.log(anatomia);
    this.metricasComponent.recalcula();
  }

  progreso() {
    localStorage.removeItem('anatomiaList');
    localStorage.removeItem('metricasList');
    localStorage.setItem('anatomiaList', JSON.stringify(this.anatomiaList));

    this.daoService.getMetricas(this.paciente).subscribe(
      R => {
        if (R.length === 0) {
          alert('El paciente no contiene datos');
        } else {
          let metricasList: Metricas[] = [];
          // metricasList = R;
          console.log(R);
        }
      }
    );


    //this.route.navigate(['progreso']);
  }

  ngOnInit() {
    this.hora = 12;
    this.minuto = 0;
    // El paciente esta en localStorage
    this.paciente = JSON.parse(localStorage.getItem('Paciente'));
    this.getCitaPacienteAll();

    this.getListaPatologias();

    this.getAnatomia();
  }

}
