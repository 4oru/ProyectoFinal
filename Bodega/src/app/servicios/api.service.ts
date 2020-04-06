import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Inventario } from '../modelos/inventario';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  // API path
  base_path = 'http://senosama-001-site1.atempurl.com';
 
  constructor(private http: HttpClient) { }
 
  // Http OPCIONES
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Ha ocurrido un error:', error.error.message);
    } else {
      
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Ha sucedido algo malo; favor intente mas tarde.');
  };
 
  createItem(item): Observable<Inventario> {
    return this.http
      .post<Inventario>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  getItem(id): Observable<Inventario> {
    return this.http
      .get<Inventario>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  getList(): Observable<Inventario> {
    return this.http
      .get<Inventario>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  updateItem(id, item): Observable<Inventario> {
    return this.http
      .post<Inventario>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  deleteItem(id): Observable<Inventario> {
    return this.http
      .delete<Inventario>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
}