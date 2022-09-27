import { Component, OnInit } from '@angular/core';
import { VendedorService } from 'src/app/service/vendedor.service';
import { Vendedor } from 'src/app/model/vendedor';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vendedor-listar',
  templateUrl: './vendedor-listar.component.html',
  styleUrls: ['./vendedor-listar.component.css']
})
export class VendedorListarComponent implements OnInit {
  dataSource: MatTableDataSource<Vendedor> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'dni', 'edad', 'celular', 'email', 'user', 'pass']
  constructor(private vs: VendedorService) { }

  ngOnInit(): void {
    this.vs.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })

  }

}
