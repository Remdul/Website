import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Reward {
  readonly id: string;
  readonly title?: string;
  readonly description?: string;
  readonly value?: number;
  readonly expires?: string;
  readonly RewardPeople?: (RewardPerson | null)[];
  readonly repeatable?: boolean;
  readonly repeatHour?: number;
  readonly claimed?: boolean;
  readonly familyID?: string;
  readonly image?: string;
  constructor(init: ModelInit<Reward>);
  static copyOf(source: Reward, mutator: (draft: MutableModel<Reward>) => MutableModel<Reward> | void): Reward;
}

export declare class RewardPerson {
  readonly id: string;
  readonly reward: Reward;
  readonly person: Person;
  constructor(init: ModelInit<RewardPerson>);
  static copyOf(source: RewardPerson, mutator: (draft: MutableModel<RewardPerson>) => MutableModel<RewardPerson> | void): RewardPerson;
}

export declare class Person {
  readonly id: string;
  readonly userName: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly phoneNumber?: string;
  readonly assignedTasks?: (TaskPerson | null)[];
  readonly email?: string;
  readonly familyID?: string;
  readonly points?: number;
  readonly ownedTasks?: (Task | null)[];
  readonly taskID?: string;
  readonly rewards?: (RewardPerson | null)[];
  readonly avatar?: string;
  constructor(init: ModelInit<Person>);
  static copyOf(source: Person, mutator: (draft: MutableModel<Person>) => MutableModel<Person> | void): Person;
}

export declare class TaskPerson {
  readonly id: string;
  readonly task: Task;
  readonly person: Person;
  constructor(init: ModelInit<TaskPerson>);
  static copyOf(source: TaskPerson, mutator: (draft: MutableModel<TaskPerson>) => MutableModel<TaskPerson> | void): TaskPerson;
}

export declare class Task {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly status?: string;
  readonly value?: number;
  readonly Owner?: (TaskPerson | null)[];
  readonly repeatable?: boolean;
  readonly endTime?: string;
  readonly repeatHours?: number;
  readonly personID?: string;
  readonly AssignedTo?: (Person | null)[];
  readonly completed?: boolean;
  readonly familyID?: string;
  readonly image?: string;
  constructor(init: ModelInit<Task>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

export declare class Family {
  readonly id: string;
  readonly People?: (Person | null)[];
  readonly familyName?: string;
  readonly Tasks?: (Task | null)[];
  readonly Rewards?: (Reward | null)[];
  readonly avata?: string;
  constructor(init: ModelInit<Family>);
  static copyOf(source: Family, mutator: (draft: MutableModel<Family>) => MutableModel<Family> | void): Family;
}

export declare class PrivateNote {
  readonly id: string;
  readonly content: string;
  constructor(init: ModelInit<PrivateNote>);
  static copyOf(source: PrivateNote, mutator: (draft: MutableModel<PrivateNote>) => MutableModel<PrivateNote> | void): PrivateNote;
}