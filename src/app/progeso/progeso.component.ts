import { Component, OnInit } from '@angular/core';

import {Chart} from 'Chart.js';

import { Paciente } from '../model/paciente';
import { Metricas } from '../model/metricas';
import { DaoService } from '../dao/dao.service';
import { Anatomia } from '../model/anatomia';

@Component({
  selector: 'app-progeso',
  templateUrl: './progeso.component.html',
  styleUrls: ['./progeso.component.css']
})
export class ProgesoComponent implements OnInit {

  constructor() { }

  anatomiaList: Anatomia[] = [];

  chartPeso() {

    let canvas: any;
    canvas = document.getElementById('myChart');
    let ctx: any;
    ctx = canvas.getContext('2d');

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45]
      }]
    };

    const options = {
      responsive: true
    };

    const chart = new Chart(ctx, {
      // Tipo de grafica
      type: 'line',

      // Dataset
      data,

      // Configuracion
      options
  });

  }

  ngOnInit() {
    this.anatomiaList = JSON.parse(localStorage.getItem('anatomiaList'));

    this.chartPeso();

  }

}
