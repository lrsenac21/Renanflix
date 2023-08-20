import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { Filme } from "../model/filme";
import { API } from "../app.api";
import { ErrorHandler } from "../app.error-handler";

@Injectable()
export class FilmesService{
    constructor(private http: HttpClient){}

    listarFilmesCategoria(id: number): Observable<Filme[]>{
        return this.http.get<Filme[]>(`${API}/filmes?categoriaID=${id}`).pipe(catchError(ErrorHandler.handleError))
    }
}