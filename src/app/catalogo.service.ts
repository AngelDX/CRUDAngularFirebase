import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Catalogo } from './catalogo';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  //productoList: any[]=[];
  productoList : AngularFireList<Catalogo>;
  selectProducto: Catalogo=new Catalogo();
  
  constructor(private firebase:AngularFireDatabase) {
    this.productoList = firebase.list('/catalogo'); 
  }

  getProductos(){
    //this.productoList=this.firebase.list('catalogo');
    return this.productoList;
  }
  
  insertProducto(producto: Catalogo){
    return this.productoList.push(producto);
  }

  deleteProducto(key: string){
    return this.productoList.remove(key);
  }

  updateproducto(key:string, producto: Catalogo){
    return this.productoList.update(key,{
      nombre:producto.nombre,
      categoria:producto.categoria,
      precio: producto.precio,
      cantidad: producto.cantidad
    });
  }
  
}
