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


  getAnatomia() {

    this.daoService.getAnatomia(this.paciente).subscribe(
      R => {
        this.anatomia = R;
        console.log(R.brazo);
      }
    );

  }


  ngOnInit() {
    this.paciente = JSON.parse(localStorage.getItem('Paciente'));
    this.getAnatomia();
  }

}
