import { FacturaComponent } from './page/factura/factura.component';
import { ReporteComponent } from './page/reporte/reporte.component';
import { OfertaComponent } from './page/oferta/oferta.component';
import { ConsumidorComponent } from './page/consumidor/consumidor.component';
import { NotificacionComponent } from './page/notificacion/notificacion.component';
import { DonacionComponent } from './page/donacion/donacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './page/categoria/categoria.component';
import { ProductoComponent } from './page/producto/producto.component';
import { VendedorComponent } from './page/vendedor/vendedor.component';
import { DetalleVentaComponent } from './page/detalle-venta/detalle-venta.component';


const routes: Routes = [{
  path: 'categoria', component:CategoriaComponent,children:[

  ]
},
{
  path:'vendedor', component:VendedorComponent,children:[

  ]
},
{
  path:'producto', component:ProductoComponent,children:[
    
  ]
},
{
  path:'donacion', component:DonacionComponent,children:[
    
  ]
},
{
  path:'notificacion', component:NotificacionComponent,children:[
    
  ]
},
{
  path:'consumidor', component:ConsumidorComponent,children:[
    
  ]
},
{
  path:'oferta', component:OfertaComponent,children:[
    
  ]
},
{
  path:'reporte', component:ReporteComponent,children:[
    
  ]
},
{
  path:'detalle-venta', component:DetalleVentaComponent,children:[
    
  ]
},
{
  path:'factura', component:FacturaComponent,children:[
    
  ]
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
