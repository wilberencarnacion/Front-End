import { Injectable } from '@angular/core';
import { Vendedor } from '../model/vendedor';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VendedorService {
url: string= "http://localhost:5000/vendedor"
private listaCambio = new Subject<Vendedor[]>()
private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Vendedor[]>(this.url);  
  }
  insertar(vendedor:Vendedor){
    return this.http.post(this.url,vendedor);
  }
  setLista(listaNueva: Vendedor[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  modificar(vendedor: Vendedor){
    return this.http.put(this.url + "/" + vendedor.id, vendedor);
  }
  listarId(id:number){
    return this.http.get<Vendedor>(`${this.url}/${id}`);
  }
  eliminar(id:number){
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean){
    this.confirmaEliminacion.next(estado);
  }
  buscar (texto: string){
    if(texto.length!=0){
      return this.http.post<Vendedor[]>(`${this.url}/buscar`, texto.toLowerCase(),{});
    }
    return EMPTY;
  }
}
