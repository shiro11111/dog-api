import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DogService } from './dog.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoadDogFail, LoadDogListSuccess } from './dog.actions';
import { of } from 'rxjs';

@Injectable()
export class DogEffects {
  constructor(private http: HttpClient,
              private actions$: Actions,
              private service: DogService) {
  }

  @Effect() loadDogList$ = this.actions$.pipe(
    ofType('LOAD_DOG_LIST'),
    switchMap(() => this.service.loadDogs().pipe(
      map((res: string[]) => (new LoadDogListSuccess(res))),
      catchError((error: HttpErrorResponse) => of(new LoadDogFail(error)))
    )));
}
