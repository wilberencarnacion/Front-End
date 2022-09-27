import { Vendedor } from 'src/app/model/vendedor';
import { Consumidor } from './consumidor';

export class Reporte{
    id:number=0;
    descripReporte: string="";
    consumidor: Consumidor=new Consumidor();
    vendedor: Vendedor= new Vendedor();
}