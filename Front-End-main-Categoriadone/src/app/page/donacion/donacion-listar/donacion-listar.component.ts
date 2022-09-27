import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DonacionService } from 'src/app/service/donacion.service';
import { Donacion } from 'src/app/model/donacion';


@Component({
  selector: 'app-donacion-listar',
  templateUrl: './donacion-listar.component.html',
  styleUrls: ['./donacion-listar.component.css']
})
export class DonacionListarComponent implements OnInit {
  dataSource: MatTableDataSource<Donacion> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','producto','cantidad','direccion'];
  constructor(private ds:DonacionService) { }

  ngOnInit(): void {
    this.ds.listar().subscribe(d=>
      this.dataSource=new MatTableDataSource(d));

  }

}

