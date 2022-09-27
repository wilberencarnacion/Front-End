import { Injectable } from '@angular/core';
import { Vendedor } from '../model/vendedor';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VendedorService {
url: string= "http://localhost:5000/vendedor"
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Vendedor[]>(this.url);  
  }
}
