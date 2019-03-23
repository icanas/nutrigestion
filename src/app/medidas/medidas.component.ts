import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() anatomia: Anatomia;
  @Output() recalculaEvent = new EventEmitter();


  actualizaMedidas() {
    // QUE NO SE ME OLVIDE ALMACENAR TAMBIEN LAS METRICAS //

    this.daoService.actualizaMedidas(this.paciente, this.anatomia).subscribe(
      R => {
        window.location.reload();
      }
    );

  }

  recalculaMetricas() {
    this.recalculaEvent.emit();
  }


  ngOnInit() {
    this.paciente = JSON.parse(localStorage.getItem('Paciente'));
  }

}
