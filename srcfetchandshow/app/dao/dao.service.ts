import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  constructor(
    private http: HttpClient) { }

    private Url = 'http://localhost:80/api/getCode.php';

    /** GET code de servidor */
    getCode(): Observable<string> { // Debo definirme tipos de datos que me proporcionen esos valores para recibirlos bien

      return this.http.get<string>(this.Url);
    }

  }
