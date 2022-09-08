import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramRoutesService {

  constructor( private http: HttpClient) { }


  getProgramsList() : Observable<any> {
    return of(null);
  }

  getShow(id: string): Observable<any>{
    return of(null);
  }

  addShow(show: FormData): Observable<any>{
    return this.http.post<any>('http://localhost:3000/shows', show);
  }

  editShow(id: string ,show: FormData): Observable<any>{

    return this.http.put<any>(`http://localhost:3000/shows/${id}`, show );
  }

  deleteShow(id: string): Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/shows/${id}`);
  }
}
