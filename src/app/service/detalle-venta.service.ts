import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Detalle_venta } from '../model/detalle-venta';

@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {
  url: string = "http://localhost:5000/detalle_Venta"
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Detalle_venta[]>(this.url);
  }
}
