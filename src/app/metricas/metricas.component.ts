import { Component, OnInit, Input } from '@angular/core';

import { DaoService } from '../dao/dao.service';

import { Anatomia } from '../model/anatomia';
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
  @Input() anatomia: Anatomia;

  IMC: number;


  recalcula() {
    console.log('recalculando');
  }


  ngOnInit() {
    this.paciente = JSON.parse(localStorage.getItem('Paciente'));
    this.IMC = this.anatomia.peso + 1;

  }


}
