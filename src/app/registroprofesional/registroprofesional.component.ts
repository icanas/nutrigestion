import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { DaoService } from '../dao/dao.service';
import { Profesional } from '../model/profesional';

@Component({
  selector: 'app-registroprofesional',
  templateUrl: './registroprofesional.component.html',
  styleUrls: ['./registroprofesional.component.css']
})
export class RegistroprofesionalComponent implements OnInit {

  constructor(
    private daoService: DaoService,
    private route: Router) { }


  profesional: Profesional = new Profesional();
  correoDuplicado = false;
  muestraExito = false;

  registrar(): void {

    this.daoService.registrarProfesional(this.profesional).subscribe(
      R => {
        console.log(R);
        if (!R) {  // Fracaso
          this.correoDuplicado = true;
        } else {  // Exito
          this.correoDuplicado = false;
          this.muestraExito = true;
          setTimeout(() => {
            this.route.navigate(['./login']);
          }, 5000);  // 5s
        }
      }
    );

  }

  ngOnInit() {
    const codigoValido = sessionStorage.getItem('codigoValido');
    if (codigoValido !== 'true') {
      this.route.navigate(['./login']);
    } else {
      sessionStorage.removeItem('codigoValido');
    }
  }

}
