
import { schema } from 'normalizr';

export const singleDog = new schema.Entity('singleDog', {}, {idAttribute: 'id'});

export const dogge = new schema.Entity('dogge', {singleDog: singleDog}, {idAttribute: 'results'});

