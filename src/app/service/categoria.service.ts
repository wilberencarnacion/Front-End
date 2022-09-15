import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../model/categoria';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url: string = "http://localhost:5000/categoria"
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Categoria[]>(this.url);
  }


}
