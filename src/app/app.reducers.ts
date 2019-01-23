import * as fromEntitiesState from './dog/entities.reducer';
import * as fromDogState from './dog/dog.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { dogReducer } from './dog/dog.reducers';
import { entityReducer } from './dog/entities.reducer';

export interface AppState {
dogState: fromDogState.DogState;
entities: fromEntitiesState.EntitiesState;
}

export const reducers: ActionReducerMap<AppState> = {
  dogState: dogReducer,
  entities: entityReducer
};



