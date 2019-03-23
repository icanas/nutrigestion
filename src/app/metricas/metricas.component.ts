import { Component, OnInit, Input } from '@angular/core';

import { DaoService } from '../dao/dao.service';

import { Metricas } from '../model/metricas';
import { Paciente } from '../model/paciente';

@Component({
  selector: 'app-metricas',
  templateUrl: './metricas.component.html',
  styleUrls: ['./metricas.component.css']
})
export class MetricasComponent implements OnInit {

  constructor(
    private daoService: DaoService
  ) { }

  paciente: Paciente;
  @Input() metricas: Metricas;




  recalcula() {
    console.log('recalculando');
  }


  ngOnInit() {
    this.paciente = JSON.parse(localStorage.getItem('Paciente'));

  }


}
