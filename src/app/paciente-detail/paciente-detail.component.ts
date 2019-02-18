import { Component, OnInit } from '@angular/core';


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
    private daoService: DaoService
  ) { }

  paciente: Paciente;
  cita: Cita = new Cita();
  fecha: Date;



  addCita() {

    this.cita.fecha = this.fecha;
    this.daoService.addCita(this.paciente, this.cita).subscribe(
      R => {

        if (!R) {
          alert('Fecha Errónea');
        } else {
          alert('Nueva Cita para ' + this.fecha);
        }

    });

  }



  ngOnInit() {
    this.paciente = this.messenger.getPaciente();

  }

}
