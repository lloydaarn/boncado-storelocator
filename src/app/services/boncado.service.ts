import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoncadoService {

  constructor(private http: HttpClient) { }

  public getStores():Observable<any> {
    return this.http.get('/assets/stores.json');
  }
}