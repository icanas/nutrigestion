import { Component, OnInit } from '@angular/core';

import {Chart} from 'chart.js/dist/Chart.js';
import { TabsModule } from 'ngx-bootstrap/tabs';

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
    canvas = document.getElementById('peso');
    let ctx: any;
    ctx = canvas.getContext('2d');

    const labels: string[] = [];
    const dataset: number[] = [];

    this.anatomiaList.forEach(
      R => {
        labels.push(R.fechaModificacion.toString().substring(0, 10));
        dataset.push(Number(R.peso));
      }
    );

    const data = {
      labels,
      datasets: [{
          label: 'Peso(kg) ',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgb(0, 204, 102)',
          pointBorderColor: 'rgba(255, 0, 0, 1)',
          pointBackgroundColor: 'rgba(255, 0, 0, 1)',
          data:  dataset
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
