import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Consumidor } from '../model/consumidor';

@Injectable({
  providedIn: 'root'
})
export class ConsumidorService {
url:string="http://localhost:5000/consumidor"
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Consumidor[]>(this.url);
  }
}
