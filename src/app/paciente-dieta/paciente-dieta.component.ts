import { Component, OnInit } from '@angular/core';

import { Paciente } from '../model/paciente';

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

  ngOnInit() {

    this.paciente = JSON.parse(localStorage.getItem('Paciente'));
  }

}
