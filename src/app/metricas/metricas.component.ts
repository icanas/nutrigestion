import { Component, OnInit } from '@angular/core';

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
  anatomia: Anatomia = new Anatomia();
  anatomiaList: Anatomia[] = [];

  IMC: number;

  getAnatomia() {

    this.daoService.getAnatomia(this.paciente).subscribe(
      R => {
        if (!R) {
          this.anatomia = new Anatomia();
        } else {
          this.anatomiaList = R;
          this.anatomia = R[0];

          this.IMC = this.anatomia.peso;

        }

      }
    );

  }



  ngOnInit() {
    this.paciente = JSON.parse(localStorage.getItem('Paciente'));
    this.getAnatomia();
  }


}
