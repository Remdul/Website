// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Family, Person, TaskPerson, Task, PrivateNote } = initSchema(schema);

export {
  Family,
  Person,
  TaskPerson,
  Task,
  PrivateNote
};