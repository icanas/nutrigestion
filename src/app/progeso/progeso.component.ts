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
  metricasList: Metricas[] = [];


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

  chartComposicionCorporal() {

    let canvas: any;
    canvas = document.getElementById('composicion');
    let ctx: any;
    ctx = canvas.getContext('2d');

    const labels: string[] = [];
    labels.push('Grasa %');
    labels.push('Músculo %');
    labels.push('Óseo %' );
    labels.push('Residual %');

    // const porcentGrasa = this.metricasList[this.metricasList.length - 1].PorcentGrasa;
    const porcentGrasa = this.metricasList[0].PorcentGrasa;
    const porcentMuscular = this.metricasList[0].PorcentMuscular;
    const porcentOseo = this.metricasList[0].PorcentOsea;
    const porcentResidual = this.metricasList[0].MasaResidual;

    console.log(porcentGrasa);

    const data = {
      labels,
      datasets: [{
          backgroundColor: ['rgb(255, 255, 102)', 'rgb(255, 80, 80)', 'rgb(102, 153, 255)', 'rgb(102, 0, 102)'],
          data: [porcentGrasa, porcentMuscular, porcentOseo, porcentResidual]
      }]
    };


    const options = {
      responsive: true
    };

    const chart = new Chart(ctx, {
      // Tipo de grafica
      type: 'pie',

      // Dataset
      data,

      // Configuracion
      options
    });

  }

  chartEvolucionCorporal() {

    let canvas: any;
    canvas = document.getElementById('EvolucionCorporal');
    let ctx: any;
    ctx = canvas.getContext('2d');

    const labels: string[] = [];
    const datasetGrasa: number[] = [];
    const datasetMusculo: number[] = [];
    const datasetOseo: number[] = [];
    const datasetresidual: number[] = [];

    this.metricasList.forEach(
      R => {
        labels.push(R.fechaModificacion.toString().substring(0, 10));
        datasetGrasa.push(Number(R.PorcentGrasa));
        datasetMusculo.push(Number(R.PorcentMuscular));
        datasetOseo.push(Number(R.PorcentOsea));
        datasetresidual.push(Number(R.PorcentResidual));
      }
    );

    const data = {
      labels,
      datasets: [{
          label: 'Grasa %',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgb(230, 230, 0)',
          pointBorderColor: 'rgba(255, 0, 0, 1)',
          pointBackgroundColor: 'rgba(255, 0, 0, 1)',
          data:  datasetGrasa
      },
      {
          label: 'Musculo %',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgb(255, 80, 80)',
          pointBorderColor: 'rgba(255, 0, 0, 1)',
          pointBackgroundColor: 'rgba(255, 0, 0, 1)',
          data:  datasetMusculo
    },
    {
          label: 'Oseo %',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgb(102, 153, 255)',
          pointBorderColor: 'rgba(255, 0, 0, 1)',
          pointBackgroundColor: 'rgba(255, 0, 0, 1)',
          data:  datasetOseo
  },
  {
          label: 'Residual %',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgb(102, 0, 102)',
          pointBorderColor: 'rgba(255, 0, 0, 1)',
          pointBackgroundColor: 'rgba(255, 0, 0, 1)',
          data:  datasetresidual
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

  chartSomatotipo() {

    let canvas: any;
    canvas = document.getElementById('somatotipo');
    let ctx: any;
    ctx = canvas.getContext('2d');

    const labels: string[] = [];
    const dataset: number[] = [];

    labels.push('Endomorfo', 'Mesomorfo', 'Ectomorfo');
    dataset.push(this.metricasList[0].Endomorfo); ////////////////////////
    dataset.push(this.metricasList[0].Mesomorfo);
    dataset.push(this.metricasList[0].Ectomorfo);


    const data = {
      labels,
      datasets: [{
          label: 'Somatotipo',
          backgroundColor: 'rgb(153, 255, 153)',
          borderColor: 'rgb(0, 179, 0)',
          data:  dataset
      }]
    };

    const options = {
      responsive: true
    };

    const chart = new Chart(ctx, {
      // Tipo de grafica
      type: 'radar',

      // Dataset
      data,

      // Configuracion
      options
    });

  }

  chartPliegues() {

    let canvas: any;
    canvas = document.getElementById('pliegues');
    let ctx: any;
    ctx = canvas.getContext('2d');

    const labels: string[] = [];
    const seisPliegues: number[] = [];
    const ochoPliegues: number[] = [];

    this.metricasList.forEach(
      R => {
        labels.push(R.fechaModificacion.toString().substring(0, 10));
        seisPliegues.push(Number(R.Suma6Pliegues));
        ochoPliegues.push(Number(R.Suma8Pliegues));
      }
    );

    const data = {
      labels,
      datasets: [{
          label: '6 Pliegues',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgb(230, 230, 0)',
          pointBorderColor: 'rgba(255, 0, 0, 1)',
          pointBackgroundColor: 'rgba(255, 0, 0, 1)',
          data:  seisPliegues
      },
      {
          label: '8 Pliegues',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgb(255, 80, 80)',
          pointBorderColor: 'rgba(255, 0, 0, 1)',
          pointBackgroundColor: 'rgba(255, 0, 0, 1)',
          data:  ochoPliegues
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
    this.metricasList = JSON.parse(localStorage.getItem('metricasList'));
    this.chartPeso();
    this.chartComposicionCorporal();
    this.chartEvolucionCorporal();
    this.chartSomatotipo();
    this.chartPliegues();

  }

}
