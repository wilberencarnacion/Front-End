import { Vendedor } from 'src/app/model/vendedor';
import { VendedorService } from './../../../service/vendedor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendedor-buscar',
  templateUrl: './vendedor-buscar.component.html',
  styleUrls: ['./vendedor-buscar.component.css']
})
export class VendedorBuscarComponent implements OnInit {

  constructor(private vendedorService: VendedorService) { }

  ngOnInit(): void {
  }
  buscar(e:any){
    let array: Vendedor[]=[];
    this.vendedorService.listar().subscribe(d => {
     d.forEach((elemnt,index)=>{
      if(elemnt.nomVendedor.includes(e.target.value)){
        array.push(d[index]);
      }
     });
     this.vendedorService.setLista(array); 
    })
  }
}
