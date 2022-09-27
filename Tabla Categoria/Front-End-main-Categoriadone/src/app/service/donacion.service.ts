import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donacion } from '../model/donacion';
@Injectable({
  providedIn: 'root'
})
export class DonacionService {
url: string="http://localhost:5000/donacion"
  constructor(private http: HttpClient) { }

listar(){
  return this.http.get<Donacion[]>(this.url);
}
}
