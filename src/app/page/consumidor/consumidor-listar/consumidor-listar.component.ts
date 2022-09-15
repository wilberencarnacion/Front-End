import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table'
import { ConsumidorService } from 'src/app/service/consumidor.service';
import { Consumidor } from 'src/app/model/consumidor';
@Component({
  selector: 'app-consumidor-listar',
  templateUrl: './consumidor-listar.component.html',
  styleUrls: ['./consumidor-listar.component.css']
})
export class ConsumidorListarComponent implements OnInit {
  dataSource: MatTableDataSource<Consumidor> = new MatTableDataSource();
  displayedColumns:string[]=['Id','Name','DNI','Edad','Celular','Email','Usuario','Password']

  constructor(private cS:ConsumidorService) { }

  ngOnInit(): void {
    this.cS.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
    }

}
