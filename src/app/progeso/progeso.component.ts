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
  chart = [];
  canvas: any;
  ctx: any;

  ngOnInit() {
    this.anatomiaList = JSON.parse(localStorage.getItem('anatomiaList'));
    console.log(this.anatomiaList);

    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');

    const chart = new Chart(this.ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [0, 10, 5, 2, 20, 30, 45]
          }]
      },

      // Configuration options go here
      options: {
        responsive: true
      }
  });

  }

}
