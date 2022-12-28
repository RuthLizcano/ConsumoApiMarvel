import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteApiService {
  private url="http://gateway.marvel.com//v1/public/"
  private apikey="3401864ceb04a9512a60f7c2ca103786";
  private ts="1";
  private hash="731402af2df19bf76501d0de1f09047b";

  constructor(private http: HttpClient) { }

  getCategoria(category): Observable<any>{
    return this.http.get(this.url+category+"?ts="+this.ts+"&apikey="+this.apikey+"&hash="+this.hash);
  }

}
