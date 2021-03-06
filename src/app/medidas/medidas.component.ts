import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DaoService } from '../dao/dao.service';

import { Anatomia } from '../model/anatomia';
import { Metricas } from '../model/metricas';
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
  @Input() anatomia: Anatomia;
  @Input() anatomiaList: Anatomia[] = [];
  @Output() recalculaEvent = new EventEmitter<Anatomia>();


  actualizaMedidas() {
    // INCLUIRA TAMBIEN LAS METRICAS //

    this.daoService.actualizaMedidas(this.paciente, this.anatomia).subscribe(
      Med => {
        const metricas = new Metricas(this.paciente, this.anatomia);

        this.daoService.actualizaMetricas(this.paciente, metricas).subscribe(
          Met => {
            window.location.reload();
          }
        );
      }
    );

  }

  recalculaMetricas(anatomia: Anatomia) {
    this.recalculaEvent.emit(anatomia);
  }

  check($event) {
    let caracter;
    caracter = $event.keyCode;
    return ((caracter > 47 && caracter < 58) || caracter === 190 || caracter === 37 ||
            caracter === 39 || caracter === 9 || caracter === 8) || caracter === 38 || caracter === 40;
  }


  ngOnInit() {
    this.paciente = JSON.parse(localStorage.getItem('Paciente'));
  }

}
