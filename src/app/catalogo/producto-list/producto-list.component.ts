import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CatalogoService } from 'src/app/catalogo.service';
import { Catalogo } from 'src/app/catalogo';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  
  catalogoList?: Catalogo[];
  producto: Catalogo = new Catalogo();

  constructor(private catalogoService:CatalogoService) { }

  ngOnInit(): void {
    this.catalogoService.getProductos().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.catalogoList = data;
    });
    this.catalogoService.selectProducto.key=null;
  }

  onDelete(key:any){
    if(confirm("Estas seguro que vas a eliminar este producto?")){
      this.catalogoService.deleteProducto(key);
    }
  }

  onEdit(producto:Catalogo){
    console.log(producto);
    this.catalogoService.selectProducto=Object.assign({},producto);
  }

  onAdd(){
    this.catalogoService.selectProducto=new Catalogo();
    this.catalogoService.selectProducto.key=null;
  }

}
