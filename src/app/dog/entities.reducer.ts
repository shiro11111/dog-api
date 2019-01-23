import { Action } from '@ngrx/store';
import { LOAD_DOG_LIST, LOAD_DOG_LIST_FAIL, LOAD_DOG_LIST_SUCCESS } from './dog.actions';

export interface EntitiesState {
  entities: {[key: string]: any};
}

const initialState: EntitiesState = {
  entities: {}
};

export function entityReducer(state = initialState, action: Action) {
  console.log(action);
}


