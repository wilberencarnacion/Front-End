import { Component, OnInit } from '@angular/core';
import { NotificacionService } from 'src/app/service/notificacion.service';
import { Notificacion } from 'src/app/model/notificacion';
import { MatTableDataSource } from '@angular/material/table'
@Component({
  selector: 'app-notificacion-listar',
  templateUrl: './notificacion-listar.component.html',
  styleUrls: ['./notificacion-listar.component.css']
})
export class NotificacionListarComponent implements OnInit {
dataSource: MatTableDataSource<Notificacion>= new MatTableDataSource();
displayedColumns:string[]=['id','fecha','stock']
  constructor(private ns:NotificacionService) { }

  ngOnInit(): void {
    this.ns.listar().subscribe(data=>
      this.dataSource=new MatTableDataSource(data));
  }

}
