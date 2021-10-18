import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CatalogoService } from 'src/app/catalogo.service';
import { Catalogo } from 'src/app/catalogo';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  
  catalogoList:Catalogo[]=[];
  

  constructor(private catalogoService:CatalogoService) { }

  ngOnInit(): void {
    this.catalogoService.getProductos().snapshotChanges().subscribe(item=>{
      this.catalogoList=[];
      item.forEach(element=>{
        let x=element.payload.toJSON();
        //x['$key']=element.key;
        this.catalogoList.push(x as Catalogo);
        console.log(x);
      })
    });
  }

  onDelete($key:string){
    if(confirm("Estas seguro que vas a eliminar este producto?")){
      //this.catalogoService.deleteProducto($key)
    }
  }

  onEdit(producto:Catalogo){
    //this.catalogoService.selectProducto=Object.assign({},producto);
  }

}
