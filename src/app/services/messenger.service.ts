import { Injectable } from '@angular/core';

import { Profesional } from '../model/profesional';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor() { }

  private profesional = new Profesional();
  private paciente = new Paciente();


  sendProfesional(profesional: Profesional) {
    this.profesional = profesional;
  }
  getProfesional(): Profesional {
    return this.profesional;
  }

  sendPaciente(paciente: Paciente) {
    this.paciente = paciente;
  }
  getPaciente(): Paciente {
    return this.paciente;
  }


}
