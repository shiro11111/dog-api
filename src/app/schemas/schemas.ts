
import { schema } from 'normalizr';

const singleDog = new schema.Entity('singleDog', {}, {idAttribute: 'id'});

export const dogge = new schema.Entity('dogge', {singleDog: singleDog}, {idAttribute: 'id'});

