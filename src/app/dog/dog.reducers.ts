import { DogActions, LOAD_DOG_LIST, LOAD_DOG_LIST_FAIL, LOAD_DOG_LIST_SUCCESS } from './dog.actions';
import { Dog } from '../models/dog';

export interface DogState {
  dogList: string[];
}

const initialState: DogState = {
  dogList: [],
};

export function dogReducer(state = initialState, action: DogActions) {
  switch (action.type) {
    case LOAD_DOG_LIST:
      return {
        ...state
      };
    case LOAD_DOG_LIST_SUCCESS:
      return {
        ...state,
        dogList: action.payload
      };
    case LOAD_DOG_LIST_FAIL:
      return {
        ...state
      };
    default:
      return state;
  }
}
