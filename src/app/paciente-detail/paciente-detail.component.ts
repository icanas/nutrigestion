import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Paciente } from '../model/paciente';
import { MessengerService } from '../services/messenger.service';
import { DaoService } from '../dao/dao.service';
import { Cita } from '../model/cita';

@Component({
  selector: 'app-paciente-detail',
  templateUrl: './paciente-detail.component.html',
  styleUrls: ['./paciente-detail.component.css']
})
export class PacienteDetailComponent implements OnInit {

  constructor(
    private messenger: MessengerService,
    private daoService: DaoService,
    private route: Router
  ) { }

  paciente: Paciente;

  cita: Cita = new Cita();  // Para nueva cita
  citas: Cita[] = [];
  citaActiva: Cita = new Cita();
  conCita = false;

  fecha: Date;
  hora: number;
  minuto: number;



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




  ngOnInit() {
    this.hora = 12;
    this.minuto = 0;
    // El paciente esta en localStorage
    this.paciente = JSON.parse(localStorage.getItem('Paciente'));
    this.getCitaPacienteAll();
  }

}
