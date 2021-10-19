import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Catalogo } from './catalogo';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  productoList : AngularFireList<any>;
  selectProducto: Catalogo=new Catalogo();

  constructor(private firebase:AngularFireDatabase) {
    this.productoList = firebase.list('/catalogo'); 
  }

  getProductos(){
    return this.productoList;
  }

  insertProducto(producto: Catalogo){
    this.productoList.push(producto);
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
