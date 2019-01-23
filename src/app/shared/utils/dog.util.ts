import { List } from '../../models/dogge';
import { SingleDog } from '../../models/singleDog';

export class DogUtil {
  static getDogList(): List<SingleDog> {
    return {
      results: 5,
      list: [
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
