import { Dogge } from '../../models/dogge';

export class DogUtil {
  static getDogList(): Dogge[] {
    return {
      results: 5,
      dog: [
        {
        id: 1,
        breed: 'samoyed',
        color: 'white'
        },
        {
          id: 2,
          breed: 'daschound',
          color: 'brown'
        },
        {
          id: 3,
          breed: 'collie',
          color: 'tricolor'
        },
        {
          id: 4,
          breed: 'doberman',
          color: 'black'
        }
      ]
    };
  }
}
