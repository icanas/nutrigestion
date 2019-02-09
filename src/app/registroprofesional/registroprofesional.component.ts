import { Component, OnInit } from '@angular/core';
import { DaoService } from '../dao/dao.service';
import { Profesional } from '../actores/profesional';

@Component({
  selector: 'app-registroprofesional',
  templateUrl: './registroprofesional.component.html',
  styleUrls: ['./registroprofesional.component.css']
})
export class RegistroprofesionalComponent implements OnInit {

  constructor(
    private daoService: DaoService) { }


  profesional: Profesional = new Profesional();
  texto: string;

  registrar(): void {

    this.daoService.registrarProfesional(this.profesional).subscribe(
      R => {
        console.log(R);
      }
      );

  }

  ngOnInit() {
  }

}
