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


  validate2(): void {

    this.daoService.getCode().subscribe(codigo => this.codigo = codigo);

  }


  validate(): boolean {

    let valido = false;
    valido = false;


    return valido;
  }

  ngOnInit() {
  }


}
