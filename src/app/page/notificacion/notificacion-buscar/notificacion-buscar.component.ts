import { Component, OnInit } from '@angular/core';
import { Notificacion } from 'src/app/model/notificacion';
import { NotificacionService } from 'src/app/service/notificacion.service';

@Component({
  selector: 'app-notificacion-buscar',
  templateUrl: './notificacion-buscar.component.html',
  styleUrls: ['./notificacion-buscar.component.css']
})
export class NotificacionBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private notificacionService: NotificacionService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Notificacion[] = [];
    this.notificacionService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.fechaCaducidad.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.notificacionService.setLista(array);
    })
  }
}
