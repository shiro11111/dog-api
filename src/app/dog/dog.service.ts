import { Injectable } from '@angular/core';
import { Dog } from '../models/dog';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { List } from '../models/dogge';
import { DogUtil } from '../shared/utils/dog.util';
import { SingleDog } from '../models/singleDog';
import { normalize } from 'normalizr';
import { singleDog } from '../schemas/schemas';

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

  loadDogList(): Observable<any> {
    return of(DogUtil.getDogList()).pipe(
      filter((list: List<SingleDog>) => !!(list && list.results)),
      map((list: List<SingleDog>) => list && list.list as SingleDog[]),
      map((list: SingleDog[]) => normalize(list, [singleDog]))
    );
  }
}
