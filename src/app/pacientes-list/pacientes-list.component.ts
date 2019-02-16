import { Component, OnInit, Input } from '@angular/core';

import { Paciente } from '../model/paciente';
import { Profesional } from '../model/profesional';
import { DaoService } from '../dao/dao.service';


@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css']
})
export class PacientesListComponent implements OnInit {

  constructor(
    private daoService: DaoService
  ) { }

  @Input() profesional: Profesional;

  listaPacientes: Paciente[];



  getPacientesList() {
    this.daoService.getPacientesList(this.profesional).subscribe(
      R => {
        console.log(R);
        this.listaPacientes = R;
      }
    );
  }

  ngOnInit() {
    this.getPacientesList();
  }

}
