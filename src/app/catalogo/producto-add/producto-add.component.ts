import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/catalogo.service';
import { NgForm } from '@angular/forms';
import { Catalogo } from 'src/app/catalogo';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.css']
})
export class ProductoAddComponent implements OnInit {

  constructor(public catalogoService:CatalogoService) { }

  ngOnInit(): void {
  }

  onSubmit(productosForm: NgForm){
    if(productosForm.value.key==null){
      this.catalogoService.insertProducto(productosForm.value);
    }else{
      this.catalogoService.updateproducto(productosForm.value.key, productosForm.value)
    }
    this.resetForm(productosForm);
    //onsole.log(productosForm.value);
  }

  resetForm(productosForm: NgForm){
    if(productosForm != null){
      productosForm.reset();
      productosForm.value.key=null;
      this.catalogoService.selectProducto=new Catalogo();
      this.catalogoService.selectProducto.key=null;
    }
  }
}
