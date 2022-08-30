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
    return this.http.get<Show[]>("");
  }

  getShow(id: string): Observable<Show>{
    return this.http.get<Show>(``);
  }

  addShow(category: FormData){

    return this.http.post('', category);
  }

  editShow(id: string ,category: FormData): Observable<any>{

    return this.http.put<any>(``, category );
  }

  deleteShow(id: string): Observable<any>{
    return this.http.delete<any>(``);
  }
}
