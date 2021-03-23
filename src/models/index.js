// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Reward, RewardPerson, Person, TaskPerson, Task, Family, PrivateNote } = initSchema(schema);

export {
  Reward,
  RewardPerson,
  Person,
  TaskPerson,
  Task,
  Family,
  PrivateNote
};