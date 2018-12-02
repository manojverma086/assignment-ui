import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Shop } from './shop';


@Injectable()
export class ShopService {
  constructor( private http: HttpClient) { }
  private api_url = 'localhost:8000/api/shops/';

  getAll (): Observable<any> {
    const httpOptions = {
      // withCredentials: true,
      headers: new HttpHeaders(
        {
        'content-type': 'application-json',
        'accept': 'application-json',
        'cache-control': 'no-cache'
        })
    };

    const url = `${this.api_url}`;
    return this.http.get<any>(url, httpOptions)
      .pipe(
        tap(shops => this.log(`fetched shops`)),
        catchError(this.handleError('get', []))
      );
  }
  getById(id): Observable<any> {
    const httpOptions = {
        // withCredentials: true,
        headers: new HttpHeaders(
          {
          'content-type': 'application-json',
          'accept': 'application-json',
          'cache-control': 'no-cache'
          })
      };
      const url = `${this.api_url}/${id}`;
      return this.http.get<any>(url, httpOptions)
        .pipe(
          tap(shop => this.log(`fetched shop`)),
          catchError(this.handleError('get', []))
        );
  }
  create(shop): Observable<any> {
    const httpOptions = {
        // withCredentials: true,
        headers: new HttpHeaders(
          {
          'content-type': 'application-json',
          'accept': 'application-json',
          'cache-control': 'no-cache'
          })
      };
      const url = `${this.api_url}`;
      return this.http.post<any>(url, shop, httpOptions)
        .pipe(
          tap(result => this.log(`created shop`)),
          catchError(this.handleError('create', []))
        );
  }
  delete(shop): Observable<any> {
    const httpOptions = {
        // withCredentials: true,
        headers: new HttpHeaders(
          {
          'content-type': 'application-json',
          'accept': 'application-json',
          'cache-control': 'no-cache'
          })
      };
      const url = `${this.api_url}/${shop.id}`;
      return this.http.delete<any>(url, httpOptions)
        .pipe(
          tap(result => this.log(`shop deleted`)),
          catchError(this.handleError('delete', []))
        );
  }

  private log(message: string) {
    console.log('Service: ' + message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
