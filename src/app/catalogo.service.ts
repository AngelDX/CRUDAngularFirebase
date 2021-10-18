import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Catalogo } from './catalogo';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  //productoList: any[]=[];
  productoList : AngularFireList<any>;
  selectProducto: Catalogo=new Catalogo();

  constructor(private firebase:AngularFireDatabase) {
    this.productoList = firebase.list('/catalogo'); 
    //this.getProductos();
  }

  getProductos(){
    this.productoList=this.firebase.list('catalogo');
    return this.productoList;
  }

  insertProducto(producto: Catalogo){
    this.productoList.push({
      nombre:producto.nombre,
      categoria:producto.categoria,
      precio: producto.precio,
      cantidad: producto.cantidad,
      total: producto.precio*producto.cantidad
    });
  }
}
