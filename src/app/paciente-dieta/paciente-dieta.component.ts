import { Component, OnInit } from '@angular/core';

import { Paciente } from '../model/paciente';
import { Alimento } from '../model/alimento';

import { DaoService } from '../dao/dao.service';

@Component({
  selector: 'app-paciente-dieta',
  templateUrl: './paciente-dieta.component.html',
  styleUrls: ['./paciente-dieta.component.css']
})
export class PacienteDietaComponent implements OnInit {

  constructor(
    private daoService: DaoService
  ) { }

  paciente: Paciente = new Paciente();
  desayuno: Alimento[] = [];

  // El boton mas lo que va a hacer es hacer push al array de desayuno
  masDesayuno() {
    this.desayuno.push(new Alimento('desayuno'));
  }

  ngOnInit() {

    this.paciente = JSON.parse(localStorage.getItem('Paciente'));
    this.desayuno[0] = new Alimento('desayuno');
  }

}
