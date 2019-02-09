/* tslint:disable:triple-equals*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  constructor(
    private http: HttpClient) { }

    getCode(): Observable<string> {
      const Url = 'http://localhost:80/api/getCode.php';
      return this.http.get<string>(Url);
    }


  }
