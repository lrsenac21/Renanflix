import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from './filmes.service';
import { Filme } from '../model/filme';

@Component({
  selector: 'tuts-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {
  filmes!: Filme[];
  constructor(private service: FilmesService, private route: ActivatedRoute){}


  ngOnInit(){
    this.service.listarFilmesCategoria(this.route.snapshot.params['id']).subscribe(filmes => this.filmes = filmes);
  }
}
