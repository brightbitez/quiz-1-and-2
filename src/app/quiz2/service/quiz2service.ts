import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class Quiz2Service {
    constructor(private http: HttpClient){}
    getCategories(): Observable<any> {
    return this.http.get<any>('https://api.publicapis.org/categories')
  }
}