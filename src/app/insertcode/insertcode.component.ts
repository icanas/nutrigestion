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
    this.daoService.validateCode(this.codigo).subscribe(
      R => {
        if (R == this.codigo) {
          this.route.navigate(['/nuevoProfesional']);
        } else {
          this.Valido = false;
        }

      }
      );


  }


  ngOnInit() {
  }


}


