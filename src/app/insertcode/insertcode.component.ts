/* tslint:disable:triple-equals*/
import { Component, OnInit } from '@angular/core';
import { DaoService } from '../dao/dao.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-insertcode',
  templateUrl: './insertcode.component.html',
  styleUrls: ['./insertcode.component.css']
})
export class InsertcodeComponent implements OnInit {

  constructor(
    private daoService: DaoService,
    private route: Router) { }

  codigo: string;
  Valido = true;


  validate(): void {
    this.Valido = true;
    this.daoService.getCode().subscribe(
      codigo => {
        if (codigo == this.codigo) {
          this.route.navigate(['/nuevoProfesional']);
        } else {
          this.Valido = false;
        }

      }
      );


  }


  validate2(): void {

    this.daoService.getCode().subscribe(codigo => this.codigo = codigo);

  }


  ngOnInit() {
  }


}


