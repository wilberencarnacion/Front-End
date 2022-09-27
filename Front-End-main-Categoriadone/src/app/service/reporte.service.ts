import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reporte } from '../model/reporte';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
url:string="http://localhost:5000/reporte"
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Reporte[]>(this.url);  
  }
}
