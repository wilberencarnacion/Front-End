import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Reporte } from 'src/app/model/reporte';
import { ReporteService } from 'src/app/service/reporte.service';
@Component({
  selector: 'app-reporte-listar',
  templateUrl: './reporte-listar.component.html',
  styleUrls: ['./reporte-listar.component.css']
})
export class ReporteListarComponent implements OnInit {
  dataSource:MatTableDataSource<Reporte>=new MatTableDataSource();
  displayedColumns:string[]=['Id','Descripcion','NConsumidor']
  constructor(private pS:ReporteService) { }

  ngOnInit(): void {
    this.pS.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  }

}
