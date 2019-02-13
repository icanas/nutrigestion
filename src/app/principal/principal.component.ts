import { Component, OnInit } from '@angular/core';

import { Profesional } from '../model/profesional';
import { MessengerService } from '../services/messenger.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(
    private messenger: MessengerService
  ) { }

  private profesional: Profesional;



  ngOnInit() {
    this.profesional = this.messenger.getProfesional();
  }

}
