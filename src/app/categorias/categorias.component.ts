import { Component } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'tuts-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categoria!: Categoria[];

  constructor(private service: CategoriaService){}

    ngOnInit(){
      this.service.listarCategorias().subscribe(categorias => this.categoria = categorias)
    }

}
