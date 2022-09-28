import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table'
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.css']
})
export class CategoriaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Categoria>=new MatTableDataSource ();
  displayedColumns:string[]=['id','nombre'];
  constructor(private cs: CategoriaService) { }

  ngOnInit(): void {
    this.cs.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  }

}
