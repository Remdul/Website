import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Family {
  readonly id: string;
  readonly People?: (Person | null)[];
  readonly familyName?: string;
  constructor(init: ModelInit<Family>);
  static copyOf(source: Family, mutator: (draft: MutableModel<Family>) => MutableModel<Family> | void): Family;
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
  readonly value?: string;
  readonly Owner?: (TaskPerson | null)[];
  readonly repeatable?: boolean;
  readonly endTime?: string;
  readonly repeatHours?: number;
  readonly personID?: string;
  readonly AssignedTo?: (Person | null)[];
  constructor(init: ModelInit<Task>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

export declare class PrivateNote {
  readonly id: string;
  readonly content: string;
  constructor(init: ModelInit<PrivateNote>);
  static copyOf(source: PrivateNote, mutator: (draft: MutableModel<PrivateNote>) => MutableModel<PrivateNote> | void): PrivateNote;
}