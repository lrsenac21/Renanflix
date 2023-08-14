import { Component } from '@angular/core';
import { Categoria } from '../model/categoria';

@Component({
  selector: 'tuts-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categoria: Categoria[] = [
    {nome: "AÇÃO", img:"/assets/acao.jpeg"},
    {nome: "ROMANCE", img:"/assets/romance.jpg"},
    {nome: "TERROR", img:"/assets/terror.jpg"},

  ]
}
