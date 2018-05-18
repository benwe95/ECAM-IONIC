import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { map, catchError } from 'rxjs/operators';
import { Note } from "../../app/note";


/*
  Generated class for the NoteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoteProvider {

  private baseUrl = 'http://localhost:8000/api/notes';

  constructor(private http: HttpClient) {
    console.log('Hello NoteProvider Provider');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getNotes(): Observable<{}> {
    return this.http.get(this.baseUrl)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
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
