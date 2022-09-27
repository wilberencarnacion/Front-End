import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Oferta } from '../model/oferta';
@Injectable({
  providedIn: 'root'
})
export class OfertaService {
url:string="http://localhost:5000/oferta"
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Oferta[]>(this.url);  
  }
}
