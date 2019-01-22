import * as fromDogState from './dog/dog.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { dogReducer } from './dog/dog.reducers';

export interface AppState {
dogState: fromDogState.DogState
}

export const reducers: ActionReducerMap<AppState> = {
  dogState: dogReducer
};



