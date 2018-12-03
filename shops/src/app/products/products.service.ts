import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from './product';


@Injectable()
export class ProductService {
  constructor( private http: HttpClient) { }
  private api_url = environment.api_url + 'shops';

  getAll (shopId): Observable<Product[]> {
    const httpOptions = {
      // withCredentials: true,
      headers: new HttpHeaders(
        {
        'content-type': 'application/json',
        'accept': 'application/json',
        'cache-control': 'no-cache'
        })
    };

    const url = `${this.api_url}/${shopId}/products`;
    return this.http.get<any>(url, httpOptions)
      .pipe(
        tap(products => this.log(`fetched products`)),
        catchError(this.handleError('get', []))
      );
  }
  getById(shopId, id): Observable<any> {
    const httpOptions = {
        // withCredentials: true,
        headers: new HttpHeaders(
          {
          'content-type': 'application/json',
          'accept': 'application/json',
          'cache-control': 'no-cache'
          })
      };
      const url = `${this.api_url}/${shopId}/products/${id}`;
      return this.http.get<any>(url, httpOptions)
        .pipe(
          tap(product => this.log(`fetched product`)),
          catchError(this.handleError('get', []))
        );
  }
  create(shopId, product): Observable<any> {
    const httpOptions = {
        // withCredentials: true,
        headers: new HttpHeaders(
          {
          'content-type': 'application/json',
          'accept': 'application/json',
          'cache-control': 'no-cache'
          })
      };
      const url = `${this.api_url}${shopId}/products`;
      return this.http.post<any>(url, product, httpOptions)
        .pipe(
          tap(result => this.log(`created shop`)),
          catchError(this.handleError('create', []))
        );
  }
  delete(shopId, product): Observable<any> {
    const httpOptions = {
        // withCredentials: true,
        headers: new HttpHeaders(
          {
          'content-type': 'application/json',
          'accept': 'application/json',
          'cache-control': 'no-cache'
          })
      };
      const url = `${this.api_url}/${shopId}/products/${product.id}`;
      return this.http.delete<any>(url, httpOptions)
        .pipe(
          tap(result => this.log(`product deleted`)),
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
