import { Component, OnInit } from '@angular/core';
import { DaoService } from '../dao/dao.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private daoService: DaoService,
    private route: Router) { }

  email: string;
  password: string;
  valido = true;

  logIn() {

    this.daoService.login(this.email, this.password).subscribe(
      R => {
        if (!R) {
          console.log(R);
          this.valido = false;

        } else {
          this.route.navigate(['/nuevoProfesional']);
        }

      }
      );

  }

  ngOnInit() {
  }

}
