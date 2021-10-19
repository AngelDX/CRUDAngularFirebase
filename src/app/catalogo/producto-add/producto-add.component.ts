import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/catalogo.service';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { Catalogo } from 'src/app/catalogo';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.css']
})
export class ProductoAddComponent implements OnInit {

  //producto: Catalogo = new Catalogo();
  
  constructor(public catalogoService:CatalogoService) {  }

  ngOnInit(): void {
  }

  onSubmit(productosForm: NgForm){
    console.log(productosForm);
    //this.catalogoService.insertProducto(this.producto);
    if(productosForm.value.key==null){      
      this.catalogoService.insertProducto(productosForm.value);
    }else{
      this.catalogoService.updateproducto(productosForm.value.key,productosForm.value);
    }
    this.resetForm(productosForm);
    console.log(productosForm);
  }

  resetForm(productosForm: NgForm){
    if(productosForm != null){
      productosForm.reset();
      this.catalogoService.selectProducto=new Catalogo();
    }
  }

}
