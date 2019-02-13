import { Injectable } from '@angular/core';

import { Profesional } from '../model/profesional';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor() { }

  private profesional = new Profesional();


  sendProfesional(profesional: Profesional) {
    this.profesional = profesional;
  }
  getProfesional(): Profesional {
    return this.profesional;
  }


}
