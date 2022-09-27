import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url: string = "http://localhost:5000/producto"
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Producto[]>(this.url);
  }
}
