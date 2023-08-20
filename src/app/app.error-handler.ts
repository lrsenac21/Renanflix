import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export class ErrorHandler{
    static handleError(error: HttpErrorResponse | any){
        let mensagemError: string;

        if (error instanceof HttpErrorResponse){
            mensagemError= `$Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}` 
        } else {
            mensagemError = error.toString();

        }
        console.log(mensagemError);

        return throwError(() => mensagemError)
    }
}