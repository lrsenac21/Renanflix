import { Categoria } from "../model/categoria";
import { API } from "../app.api";
import {Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http";
import { Observable, catchError } from "rxjs";
import { ErrorHandler } from "../app.error-handler";



@Injectable()
export class CategoriaService{
    constructor(private http: HttpClient){}
   //                 Observar o array de Categorias[]
        listarCategorias(): Observable<Categoria[]>{
            return this.http.get<Categoria[]>(`${API}/categorias`).pipe(catchError(ErrorHandler.handleError))
        }        

    //      http (variavel) (get puxar) <Puxar o Categoria[]> (`$(Chamar a a variavel)/ link da variavel)
            
   }
