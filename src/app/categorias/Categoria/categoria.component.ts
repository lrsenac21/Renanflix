import { Component, Input } from '@angular/core';
import { Categoria } from 'src/app/model/categoria';

@Component({
  selector: 'tuts-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  @Input() categoria!: Categoria;
}
