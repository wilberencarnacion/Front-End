import { Producto } from 'src/app/model/producto';
export class Oferta{
    id:number=0;
    desOferta:number=0;
    PrecioOferta: number=0;
    fechaPublicacion:string="";
    producto: Producto=new Producto();
}