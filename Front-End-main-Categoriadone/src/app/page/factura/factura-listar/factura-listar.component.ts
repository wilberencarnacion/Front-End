import { FacturaService } from './../../../service/factura.service';
import { Factura } from './../../../model/factura';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-factura-listar',
  templateUrl: './factura-listar.component.html',
  styleUrls: ['./factura-listar.component.css']
})
export class FacturaListarComponent implements OnInit {
  dataSource:MatTableDataSource<Factura>=new MatTableDataSource();
  displayedColumns:string[]=['Id','Consumidor','NVenta']
  constructor(private fs: FacturaService) { }

  ngOnInit(): void {
    this.fs.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  }

}
