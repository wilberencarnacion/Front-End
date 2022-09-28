import { VendedorCreaeditaComponent } from './page/vendedor/vendedor-creaedita/vendedor-creaedita.component';
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
import { NotificacionCreaeditaComponent } from './page/notificacion/notificacion-creaedita/notificacion-creaedita.component';
import { CategoriaCreaeditaComponent } from './page/categoria/categoria-creaedita/categoria-creaedita.component';
import { ConsumidorCreaeditaComponent } from './page/consumidor/consumidor-creaedita/consumidor-creaedita.component';
const routes: Routes = [{
  path: 'categoria', component:CategoriaComponent,children:[
    { path: 'nuevo', component: CategoriaCreaeditaComponent },
    { path: 'edicion/:id', component: CategoriaCreaeditaComponent }
  ]
},
{
  path:'vendedor', component:VendedorComponent,children:[
    {path: 'nuevo', component: VendedorCreaeditaComponent},
    {path: 'edicion/:id', component: VendedorCreaeditaComponent}
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
    {path:'nuevo', component:NotificacionCreaeditaComponent},
    {path:'edicion/:id', component:NotificacionCreaeditaComponent}
  ]
},
{
  path:'consumidor', component:ConsumidorComponent,children:[
    {path: 'nuevo', component: ConsumidorCreaeditaComponent},
    {path: 'edicion/:id', component: ConsumidorCreaeditaComponent}
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
