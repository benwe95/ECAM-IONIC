import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { catchError } from 'rxjs/operators';
import {Category} from "../../app/category";
/*
  Generated class for the CategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryProvider {

  private baseUrl = 'http://localhost:8000/api/categories';

  constructor(public http: HttpClient) {
    console.log('Hello CategoryProvider Provider');
  }

  /*private extractData(res: Response) {
    /*let body = res;
    /*body || { }
   }*/


  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }


  updateCategory(category: Category, id: number): Observable<{}> {
    const updateUrl = `${this.baseUrl}/${id}`;
    return this.http.put<Category>( updateUrl, category);
  }


  addCategory(category: Category): Observable<{}>{
    return this.http.post<Category>(this.baseUrl, category);
  }


  delCategory(id: number): Observable<{}>{
    const updateUrl = `${this.baseUrl}/${id}`;
    return this.http.delete(updateUrl);
  }


  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
