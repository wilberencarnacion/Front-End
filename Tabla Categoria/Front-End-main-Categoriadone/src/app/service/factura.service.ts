import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from '../model/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
url: string="http://localhost:5000/factura"
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Factura[]>(this.url);  
  }
}
