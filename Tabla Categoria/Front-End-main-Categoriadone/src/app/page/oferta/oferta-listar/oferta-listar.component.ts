import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Oferta } from 'src/app/model/oferta';
import { OfertaService } from 'src/app/service/oferta.service';
@Component({
  selector: 'app-oferta-listar',
  templateUrl: './oferta-listar.component.html',
  styleUrls: ['./oferta-listar.component.css']
})
export class OfertaListarComponent implements OnInit {
  dataSource:MatTableDataSource<Oferta>=new MatTableDataSource();
  displayedColumns:string[]=['Id','Descuento','Precio','Fecha','Producto']
  constructor(private pS:OfertaService) { }

  ngOnInit(): void {
    this.pS.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  }

}
