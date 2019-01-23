import { SingleDog } from '../models/singleDog';

export interface EntitiesState {
  dog: {
    list: SingleDog[],
  };
  entities: {[key: string]: any};
}

export function entityReducer(state: EntitiesState, ) {

}


