import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

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
  listaPacientesActivo: Paciente[] = [];
  listaPacientesCita: Paciente[] = [];
  listaPacientesBaja: Paciente[] = [];


  verDetalle(paciente: Paciente) {
    localStorage.removeItem('Paciente');
    localStorage.setItem('Paciente', JSON.stringify(paciente));
    this.messenger.sendPaciente(paciente);
    this.route.navigate(['detallePaciente']);

  }

  getPacientesList() {
    this.daoService.getPacientesList(this.profesional).subscribe(
      ListaPacientes => {

        this.listaPacientes = ListaPacientes;

        this.listaPacientes.forEach(  // Separo los pacientes de baja de los activos
          paciente => {
            const aux: Paciente = paciente;
            this.daoService.getCitaPacienteAll(paciente).subscribe( // Me traigo sus citas
              citas => {
                paciente.citas = citas;

                if (paciente.citas != null && paciente.activo === '1') {
                  this.listaPacientesCita.push(paciente);
                } else if (paciente.activo === '1') {
                  this.listaPacientesActivo.push(paciente);
                } else {
                  this.listaPacientesBaja.push(paciente);
                }

              }
            );

          }
        );

      }
    );
  }





  ngOnInit() {
    this.getPacientesList();
  }

}

