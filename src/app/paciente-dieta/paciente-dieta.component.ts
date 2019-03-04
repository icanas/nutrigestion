import { Component, OnInit } from '@angular/core';

import { Paciente } from '../model/paciente';
import { Alimento } from '../model/alimento';
import { Dieta } from '../model/dieta';

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
  dieta: Dieta = new Dieta();


  // El boton mas lo que va a hacer es hacer push al array de desayuno
  masDesayuno() {
    this.dieta.Lunes.push(new Alimento('desayuno'));
    console.log(this.dieta);
  }

  guardarDieta() {
    console.log(this.dieta);
  }

  ngOnInit() {

    this.paciente = JSON.parse(localStorage.getItem('Paciente'));
    console.log(this.dieta);
  }

}
