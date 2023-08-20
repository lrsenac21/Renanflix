import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { SobreComponent } from './sobre/sobre.component';
import { RouterModule } from '@angular/router';
import { ROUTE } from 'src/app.route';
import { CategoriaComponent } from './categorias/Categoria/categoria.component';
import { CategoriaService } from './categorias/categoria.service';
import { FilmesComponent } from './filmes/filmes.component';
import { FilmesService } from './filmes/filmes.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CategoriasComponent,
    SobreComponent,
    CategoriaComponent,
    FilmesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTE),
    HttpClientModule
  ],
  providers: [CategoriaService, FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
