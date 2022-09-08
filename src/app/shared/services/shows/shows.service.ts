import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../../models/show';

@Injectable({
  providedIn: 'root'
})

export class ShowsService {

  constructor(private http : HttpClient) { }

  getShowsList() : Observable<Show[]> {
    return this.http.get<Show[]>("http://localhost:3000/shows/list");
  }

  getShow(id: string): Observable<Show>{
    return this.http.get<Show>(`http://localhost:3000/shows/${id}`);
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
