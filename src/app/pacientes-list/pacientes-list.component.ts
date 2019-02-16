import { Component, OnInit, Input } from '@angular/core';

import { Paciente } from '../model/paciente';
import { Profesional } from '../model/profesional';
import { DaoService } from '../dao/dao.service';
import { MessengerService } from '../services/messenger.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css']
})
export class PacientesListComponent implements OnInit {

  constructor(
    private daoService: DaoService,
    private messenger: MessengerService,
    private route: Router
  ) { }

  @Input() profesional: Profesional;

  listaPacientes: Paciente[];


  verDetalle(paciente: Paciente) {
    this.messenger.sendPaciente(paciente);
    this.route.navigate(['detallePaciente']);

  }

  getPacientesList() {
    this.daoService.getPacientesList(this.profesional).subscribe(
      R => {
        this.listaPacientes = R;
      }
    );
  }

  ngOnInit() {
    this.getPacientesList();
  }

}
