import { Component, OnInit } from '@angular/core';
import { DaoService } from '../dao/dao.service';

@Component({
  selector: 'app-insertcode',
  templateUrl: './insertcode.component.html',
  styleUrls: ['./insertcode.component.css']
})
export class InsertcodeComponent implements OnInit {

  constructor(private daoService: DaoService) { }

  codigo: string;
  valido: string;

  validate(): void {

    if (this.daoService.isValid(this.codigo)) {
      this.valido = 'SI';
    } else {
      this.valido = 'NO';
    }



  }


  ngOnInit() {
  }


}



/*
  validate2(): void {

    this.daoService.getCode().subscribe(codigo => this.codigo = codigo);

  }
*/
