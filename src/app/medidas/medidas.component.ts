import { Component, OnInit } from '@angular/core';

import { DaoService } from '../dao/dao.service';

import { Anatomia } from '../model/anatomia';
import { Paciente } from '../model/paciente';


@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.component.html',
  styleUrls: ['./medidas.component.css']
})
export class MedidasComponent implements OnInit {

  constructor(
    private daoService: DaoService
  ) { }

  paciente: Paciente;
  anatomia: Anatomia = new Anatomia();
  anatomiaList: Anatomia[] = [];



  getAnatomia() {

    this.daoService.getAnatomia(this.paciente).subscribe(
      R => {
        if (!R) {
          this.anatomia = new Anatomia();
        } else {
          this.anatomiaList = R;
          this.anatomia = R[0];
          this.paciente.anatomia = this.anatomia;
          localStorage.setItem('Paciente', JSON.stringify(this.paciente));  // Lo guardo en local con sus medidas
        }

      }
    );

  }

  actualizaMedidas() {

    this.daoService.actualizaMedidas(this.paciente, this.anatomia).subscribe(
      R => {
        window.location.reload();
      }
    );

  }


  ngOnInit() {
    this.paciente = JSON.parse(localStorage.getItem('Paciente'));
    this.getAnatomia();
  }

}
