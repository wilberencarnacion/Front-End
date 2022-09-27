import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../model/categoria';
import { Subject, EMPTY } from 'rxjs';
import { identifierName } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url: string = "http://localhost:5000/categoria"
  private listaCategoria = new Subject<Categoria[]>()
  private confirmarEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Categoria[]>(this.url);
  }
  insertar(categoria: Categoria) {
    return this.http.post(this.url, categoria);
  }
  setLista(listaNueva: Categoria[]) {
    this.listaCategoria.next(listaNueva);
  }
  getLista() {
    return this.listaCategoria.asObservable();
  }
  modificar(Categoria: Categoria) {
    return this.http.put(this.url + "/" + Categoria.id, Categoria);
  }
  listarId(id: number) {
    return this.http.get<Categoria>(`${this.url}/${Categoria}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmarEliminacion() {
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmarEliminacion(estado: Boolean) {
    this.confirmarEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Categoria[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

}


