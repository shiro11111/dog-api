import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const LOAD_DOG_LIST = 'LOAD_DOG_LIST';
export const LOAD_DOG_LIST_SUCCESS = 'LOAD_DOG_LIST_SUCCESS';
export const LOAD_DOG_LIST_FAIL = 'LOAD_DOG_LIST_FAIL';

export class LoadDogList implements Action {
  readonly type = LOAD_DOG_LIST;
}

export class LoadDogListSuccess implements Action {
  readonly type = LOAD_DOG_LIST_SUCCESS;

  constructor(public payload: string[]) {
  }
}

export class LoadDogFail implements Action {
  readonly type = LOAD_DOG_LIST_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}

export type DogActions = LoadDogList | LoadDogListSuccess | LoadDogFail;
