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

  minDate = new Date();

  @ViewChild(MetricasComponent) metricasComponent: MetricasComponent;
  paciente: Paciente;

  cita: Cita = new Cita();  // Para nueva cita
  citas: Cita[] = [];
  citaActiva: Cita = new Cita();
  conCita = false;
  desfase: number;

  fecha: Date;
  hora: number;
  minuto: number;

  patologiasPaciente: Patologia[] = [];
  listaPatologias: Patologia[] = [];
  nuevaPatologia: Patologia = new Patologia();
  isDisabled: boolean;

  anatomia: Anatomia = new Anatomia();
  anatomiaList: Anatomia[] = [];

  metricas: Metricas = new Metricas(this.paciente, this.anatomia);

  modalRef: BsModalRef;
  modalRefPatologias: BsModalRef;



  addCita() {

    this.fecha.setHours(this.hora);
    this.fecha.setMinutes(this.minuto);
    this.fecha.setSeconds(0);
    this.cita.fecha = this.fecha ;


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

    if (cita.fecha === undefined) {
      alert('El paciente no tiene citas activas');
      return;
    }

    const dateString = cita.fecha.toString();

    const date = new Date(dateString);

    date.setMonth(date.getMonth() - 1);
    date.setHours(date.getHours() + this.desfase);

    const citaLocal = new Cita();
    citaLocal.email = cita.email;
    citaLocal.activo = cita.activo;
    citaLocal.fecha = date;

    this.daoService.cancelCita(citaLocal).subscribe(
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

        if (R !== null) {

          R.forEach(
            F => {

              const dateTimeParts = String(F.fecha).split(/[-: ]/);
              const date = new Date(Number(dateTimeParts[0]) , Number(dateTimeParts[1]),
              Number(dateTimeParts[2]),  Number(dateTimeParts[3]),  Number(dateTimeParts[4]));

              this.desfase = (date.getTimezoneOffset() * -1) / 60;
              F.fecha = date;
              if (F.activo === '0') {
                this.citas.push(F);
              } else  {
                this.citaActiva = F;
                this.conCita = true;
              }


            }
          );

        }
      }
    );

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalPatologias(templatePatologias: TemplateRef<any>) {
    this.isDisabled = false;
    this.modalRefPatologias = this.modalService.show(templatePatologias);
  }

  dietas() {
    this.route.navigate(['pacienteDieta']);
  }

  getListaPatologias() {

    this.daoService.getListaPatologias(this.paciente.emailProfesional).subscribe(
      R => {
        this.listaPatologias = R;

        this.daoService.getListaPatologiasPaciente(this.paciente).subscribe(
          P => {
            if (P != null) {
              this.patologiasPaciente = P;

              this.patologiasPaciente.forEach(
                F => {
                  let indice = 0;

                  indice = this.listaPatologias.findIndex(
                    I => I.nombre === F.nombre
                  );
                  this.listaPatologias[indice].checked = true;
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
        F => F.nombre === patologia.nombre
        );

      this.patologiasPaciente.splice(posicion, 1);
    }

    this.isDisabled = true;

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
        if ( R === null) {
          this.anatomia = new Anatomia();
        } else {
          this.anatomiaList = R;
          this.anatomiaList.reverse();
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

    this.metricasComponent.recalcula();
  }

  progreso() {
    localStorage.removeItem('anatomiaList');
    localStorage.removeItem('metricasList');
    localStorage.setItem('anatomiaList', JSON.stringify(this.anatomiaList));

    this.daoService.getMetricas(this.paciente).subscribe(
      R => {
        if (R === null) {
          alert('El paciente no contiene datos');
        } else {
          let metricasList: Metricas[] = [];
          metricasList = R;
          localStorage.setItem('metricasList', JSON.stringify(metricasList));
          this.route.navigate(['progreso']);
        }
      }
    );
  }

  agregarNuevaPatologia() {
    this.nuevaPatologia.nombre = this.nuevaPatologia.nombre.toLowerCase();
    this.daoService.insertaPatologia(this.nuevaPatologia, this.paciente.emailProfesional).subscribe(
      R => {
        if (!R) {
          alert('La patologia ya existe');
        } else {
          this.daoService.getListaPatologias(this.paciente.emailProfesional).subscribe(
            L => {
              this.listaPatologias = L;
              this.getListaPatologias();
            }
          );

        }
      }
    );

  }

  home() {
    this.route.navigate(['principal']);
  }



  ngOnInit() {
    this.hora = 12;
    this.minuto = 0;
    // El paciente esta en localStorage
    this.paciente = JSON.parse(localStorage.getItem('Paciente'));
    this.getCitaPacienteAll();

    this.getListaPatologias();

    this.getAnatomia();

    this.minDate.setDate(this.minDate.getDate());

  }

}
