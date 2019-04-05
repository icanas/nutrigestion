import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Paciente } from '../model/paciente';
import { Dieta } from '../model/dieta';

import { DaoService } from '../dao/dao.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-dietas-list',
  templateUrl: './dietas-list.component.html',
  styleUrls: ['./dietas-list.component.css']
})
export class DietasListComponent implements OnInit {

  constructor(
    private daoService: DaoService,
    private route: Router
  ) { }


  paciente: Paciente = new Paciente();
  dietas: Dieta[] = [];
  @Input() dietaActiva: Dieta;
  @Output() editar = new EventEmitter();

   // dietaVacia = new Dieta();



  getDietas() {
    this.daoService.getDietas(this.paciente).subscribe(
      R => {
        if (R !== null) {
          this.dietas = R;
          this.dietas.reverse();
          this.dietaActiva = this.dietas.pop();
          this.dietas.reverse();
        }

      }
    );
  }

  editarDieta(dieta: Dieta) {
    this.editar.emit(dieta);
  }

  verDieta(d: Dieta) {
    localStorage.removeItem('dieta');
    localStorage.setItem('dieta', JSON.stringify(d));
    this.route.navigate(['dietaVisor']);

  }

  ngOnInit() {
    this.paciente = JSON.parse(localStorage.getItem('Paciente'));
    this.getDietas();

  }

}
