import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';


@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {
  dataSource:MatTableDataSource<Producto>= new MatTableDataSource();
  displayedColumns: string[]=['id','descrip','marca','categoria','vendedor','notifi']
  constructor(private ps:ProductoService) { }

  ngOnInit(): void {

    this.ps.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
