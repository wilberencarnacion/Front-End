import { DetalleVentaService } from './../../../service/detalle-venta.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Detalle_venta } from './../../../model/detalle-venta';

@Component({
  selector: 'app-detalle-venta-listar',
  templateUrl: './detalle-venta-listar.component.html',
  styleUrls: ['./detalle-venta-listar.component.css']
})
export class DetalleVentaListarComponent implements OnInit {
  dataSource:MatTableDataSource<Detalle_venta>=new MatTableDataSource();
  displayedColumns:string[]=['Id','oferta','cantidad','total']
  constructor(private ds: DetalleVentaService) { }

  ngOnInit(): void {
    this.ds.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  }

}
