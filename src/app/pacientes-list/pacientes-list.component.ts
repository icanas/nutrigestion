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
  listaPacientesActivo: Paciente[] = [];
  listaPacientesBaja: Paciente[] = [];


  verDetalle(paciente: Paciente) {
    localStorage.removeItem('Paciente');
    localStorage.setItem('Paciente', JSON.stringify(paciente));
    this.messenger.sendPaciente(paciente);
    this.route.navigate(['detallePaciente']);

  }

  getPacientesList() {
    this.daoService.getPacientesList(this.profesional).subscribe(
      R => {

        this.listaPacientes = R;
        this.getCitaPacienteAll();

        this.listaPacientes.forEach(  // Separo los pacientes de baja de los activos
          F => {
            const aux: Paciente = F;
            if (F.activo === '1') {
              this.listaPacientesActivo.push(F);
            } else {
              this.listaPacientesBaja.push(F);
            }
          }
        );

      }
    );
  }


  getCitaPacienteAll() {  // Para cada paciente me traigo sus citas y las meto en su array

    this.listaPacientes.forEach(
      P => {
        this.daoService.getCitaPacienteAll(P).subscribe(
          R => {
            P.citas = R;
          }
        );
      }
    );



  }

  ngOnInit() {
    this.getPacientesList();
  }

}

