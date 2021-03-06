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
  listaPacientesCita: Paciente[] = [];
  listaPacientesBaja: Paciente[] = [];

  desfase: number;

  /*
  Para la busqueda
  */
  textoBusqueda: string;

  listaPacientesCitaCopy: Paciente[] = [];
  listaPacientesActivoCopy: Paciente[] = [];
  listaPacientesBajaCopy: Paciente[] = [];


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

            this.daoService.getCitaPacienteAll(paciente).subscribe( // Me traigo sus citas
              citas => {

                if (citas === null) {

                  if (paciente.activo === '1') {
                    this.listaPacientesActivo.push(paciente);
                    this.listaPacientesActivoCopy.push(paciente);
                  } else {
                    this.listaPacientesBaja.push(paciente);
                    this.listaPacientesBajaCopy.push(paciente);
                  }

                } else {

                  citas.sort( // Ordeno descendientemente las citas para tener las activas en la posicion 0
                    (a, b) => Number(b.activo) - Number(a.activo)
                  );

                  const dateTimeParts = String(citas[0].fecha).split(/[-: ]/);
                  const date = new Date(Number(dateTimeParts[0]) , Number(dateTimeParts[1]),
                  Number(dateTimeParts[2]),  Number(dateTimeParts[3]),  Number(dateTimeParts[4]));

                  this.desfase = (date.getTimezoneOffset() * -1) / 60;
                  citas[0].fecha = date;

                  if (citas[0].activo === '1' && paciente.activo === '1') {
                    paciente.citas = citas;
                    this.listaPacientesCita.push(paciente);
                    this.listaPacientesCitaCopy.push(paciente);
                  } else if (citas[0].activo === '0' && paciente.activo === '1') {
                    paciente.citas = citas;
                    this.listaPacientesActivo.push(paciente);
                    this.listaPacientesActivoCopy.push(paciente);
                  } else {
                    this.listaPacientesBaja.push(paciente);
                    this.listaPacientesBajaCopy.push(paciente);
                  }

                  this.listaPacientesCita.sort((a, b) => {
                    return Number(a.citas[0].fecha)  - Number(b.citas[0].fecha) ;
                  });

                  this.listaPacientesActivo.sort((a, b) => {
                    return Number(a.nombre)  - Number(b.nombre) ;
                  });
                }


              }
            );

          }
        );
      }
    );


  }


  busca() { // No utilizada, nueva version busca2()

    this.listaPacientesCita = this.listaPacientesCitaCopy.filter(
      F => {
        return F.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
        F.apellido.toLowerCase().includes(this.textoBusqueda.toLowerCase());
      }
    );

    this.listaPacientesActivo = this.listaPacientesActivoCopy.filter(
      F => {
        return F.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
        F.apellido.toLowerCase().includes(this.textoBusqueda.toLowerCase());
      }
    );

    this.listaPacientesBaja = this.listaPacientesBajaCopy.filter(
      F => {
        return F.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
        F.apellido.toLowerCase().includes(this.textoBusqueda.toLowerCase());
      }
    );

  }



  busca2() {

    let arrayBusqueda = [];
    arrayBusqueda[0] = '';
    arrayBusqueda[1] = '';

    if (this.textoBusqueda.includes(' ')) {
      arrayBusqueda = this.textoBusqueda.split(' ');

      this.listaPacientesCita = this.listaPacientesCitaCopy.filter(
        F => {
          return F.nombre.toLowerCase().includes(arrayBusqueda[0].toLowerCase()) &&
          F.apellido.toLowerCase().includes(arrayBusqueda[1].toLowerCase());
        }
      );

      this.listaPacientesActivo = this.listaPacientesActivoCopy.filter(
        F => {
          return F.nombre.toLowerCase().includes(arrayBusqueda[0].toLowerCase()) &&
          F.apellido.toLowerCase().includes(arrayBusqueda[1].toLowerCase());
        }
      );

      this.listaPacientesBaja = this.listaPacientesBajaCopy.filter(
        F => {
          return F.nombre.toLowerCase().includes(arrayBusqueda[0].toLowerCase()) &&
          F.apellido.toLowerCase().includes(arrayBusqueda[1].toLowerCase());
        }
      );

    } else {

      this.listaPacientesCita = this.listaPacientesCitaCopy.filter(
        F => {
          return F.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
          F.apellido.toLowerCase().includes(this.textoBusqueda.toLowerCase());
        }
      );

      this.listaPacientesActivo = this.listaPacientesActivoCopy.filter(
        F => {
          return F.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
          F.apellido.toLowerCase().includes(this.textoBusqueda.toLowerCase());
        }
      );

      this.listaPacientesBaja = this.listaPacientesBajaCopy.filter(
        F => {
          return F.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
          F.apellido.toLowerCase().includes(this.textoBusqueda.toLowerCase());
        }
      );
    }


  }


  ngOnInit() {
    this.getPacientesList();
  }

}

