import { Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { CategoriasComponent } from "./app/categorias/categorias.component";
import { SobreComponent } from "./app/sobre/sobre.component";
import { CategoriaComponent } from "./app/categorias/Categoria/categoria.component";
import { FilmesComponent } from "./app/filmes/filmes.component";

export const ROUTE: Routes = [
    {path:'', component:HomeComponent},
    {path:'sobre', component:SobreComponent},
    {path:'sobre', component:SobreComponent},
    {path:'categorias', component:CategoriasComponent},
    {path:'filmes/:id', component:FilmesComponent}
]