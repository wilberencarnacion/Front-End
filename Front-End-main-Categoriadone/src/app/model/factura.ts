import { Detalle_venta } from './detalle-venta';
import { Consumidor } from './consumidor';

export class Factura{
    id:number=0;
    consumidor:Consumidor=new Consumidor();
    detalleVenta: Detalle_venta=new Detalle_venta();
}