import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notificacion } from '../model/notificacion';
@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
url: string ="http://localhost:5000/notificacion"
  constructor(private http:HttpClient) { }

listar(){
  return this.http.get<Notificacion[]>(this.url);
}
  
}


