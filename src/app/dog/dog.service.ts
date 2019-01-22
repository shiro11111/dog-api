import { Injectable } from '@angular/core';
import { Dog } from '../models/dog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DogService {

  constructor(private http: HttpClient) {
  }

  loadDogs(): Observable<string[]> {
    return this.http.get('https://dog.ceo/api/breeds/list/all').pipe(
      map((res: Dog) => {
          console.log(Object.keys(res.message));
          return Object.keys(res.message);
        }
      ));
  }
}
