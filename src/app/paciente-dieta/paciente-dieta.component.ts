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

  desayunoLunes: Alimento[] = [];
  postDesayunoLunes: Alimento[] = [];


  // El boton mas lo que va a hacer es hacer push al array de desayuno
  masDesayunoLunes() {
    this.dieta.Lunes.push(new Alimento('desayuno'));
    console.log(this.dieta);
  }
  masPostDesayunoLunes() {
    this.dieta.Lunes.push(new Alimento('postdesayuno'));
    console.log(this.dieta);
  }

  guardarDieta() {
    console.log(this.dieta);
    this.daoService.guardarDieta(this.paciente, this.dieta).subscribe(
      R => {
        console.log(R);
      }
    );
  }

  ngOnInit() {

    this.paciente = JSON.parse(localStorage.getItem('Paciente'));
    console.log(this.dieta);
  }

}
