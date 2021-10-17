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
    
    this.catalogoService.insertProducto(productosForm.value);
    console.log(productosForm.value);
  }
}
