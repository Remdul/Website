/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteFamily = /* GraphQL */ `
  mutation DeleteFamily(
    $input: DeleteFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    deleteFamily(input: $input, condition: $condition) {
      id
      familyName
      inviteID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      People {
        items {
          id
          userName
          firstName
          lastName
          phoneNumber
          email
          familyID
          points
          taskID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createFamily = /* GraphQL */ `
  mutation CreateFamily(
    $input: CreateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    createFamily(input: $input, condition: $condition) {
      id
      familyName
      inviteID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      People {
        items {
          id
          userName
          firstName
          lastName
          phoneNumber
          email
          familyID
          points
          taskID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateFamily = /* GraphQL */ `
  mutation UpdateFamily(
    $input: UpdateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    updateFamily(input: $input, condition: $condition) {
      id
      familyName
      inviteID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      People {
        items {
          id
          userName
          firstName
          lastName
          phoneNumber
          email
          familyID
          points
          taskID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
      id
      userName
      firstName
      lastName
      phoneNumber
      email
      familyID
      points
      taskID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ownedTasks {
        items {
          id
          title
          description
          status
          value
          repeatable
          endTime
          repeatHours
          personID
          completed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      assignedTasks {
        items {
          id
          taskID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
      id
      userName
      firstName
      lastName
      phoneNumber
      email
      familyID
      points
      taskID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ownedTasks {
        items {
          id
          title
          description
          status
          value
          repeatable
          endTime
          repeatHours
          personID
          completed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      assignedTasks {
        items {
          id
          taskID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
      id
      userName
      firstName
      lastName
      phoneNumber
      email
      familyID
      points
      taskID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ownedTasks {
        items {
          id
          title
          description
          status
          value
          repeatable
          endTime
          repeatHours
          personID
          completed
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      assignedTasks {
        items {
          id
          taskID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      value
      repeatable
      endTime
      repeatHours
      personID
      completed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AssignedTo {
        items {
          id
          userName
          firstName
          lastName
          phoneNumber
          email
          familyID
          points
          taskID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Owner {
        items {
          id
          taskID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      value
      repeatable
      endTime
      repeatHours
      personID
      completed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AssignedTo {
        items {
          id
          userName
          firstName
          lastName
          phoneNumber
          email
          familyID
          points
          taskID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Owner {
        items {
          id
          taskID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      value
      repeatable
      endTime
      repeatHours
      personID
      completed
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AssignedTo {
        items {
          id
          userName
          firstName
          lastName
          phoneNumber
          email
          familyID
          points
          taskID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Owner {
        items {
          id
          taskID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $input: CreatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    createPrivateNote(input: $input, condition: $condition) {
      id
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $input: UpdatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    updatePrivateNote(input: $input, condition: $condition) {
      id
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $input: DeletePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    deletePrivateNote(input: $input, condition: $condition) {
      id
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTaskPerson = /* GraphQL */ `
  mutation CreateTaskPerson(
    $input: CreateTaskPersonInput!
    $condition: ModelTaskPersonConditionInput
  ) {
    createTaskPerson(input: $input, condition: $condition) {
      id
      taskID
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      person {
        id
        userName
        firstName
        lastName
        phoneNumber
        email
        familyID
        points
        taskID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        ownedTasks {
          nextToken
          startedAt
        }
        assignedTasks {
          nextToken
          startedAt
        }
      }
      task {
        id
        title
        description
        status
        value
        repeatable
        endTime
        repeatHours
        personID
        completed
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        AssignedTo {
          nextToken
          startedAt
        }
        Owner {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateTaskPerson = /* GraphQL */ `
  mutation UpdateTaskPerson(
    $input: UpdateTaskPersonInput!
    $condition: ModelTaskPersonConditionInput
  ) {
    updateTaskPerson(input: $input, condition: $condition) {
      id
      taskID
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      person {
        id
        userName
        firstName
        lastName
        phoneNumber
        email
        familyID
        points
        taskID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        ownedTasks {
          nextToken
          startedAt
        }
        assignedTasks {
          nextToken
          startedAt
        }
      }
      task {
        id
        title
        description
        status
        value
        repeatable
        endTime
        repeatHours
        personID
        completed
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        AssignedTo {
          nextToken
          startedAt
        }
        Owner {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteTaskPerson = /* GraphQL */ `
  mutation DeleteTaskPerson(
    $input: DeleteTaskPersonInput!
    $condition: ModelTaskPersonConditionInput
  ) {
    deleteTaskPerson(input: $input, condition: $condition) {
      id
      taskID
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      person {
        id
        userName
        firstName
        lastName
        phoneNumber
        email
        familyID
        points
        taskID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        ownedTasks {
          nextToken
          startedAt
        }
        assignedTasks {
          nextToken
          startedAt
        }
      }
      task {
        id
        title
        description
        status
        value
        repeatable
        endTime
        repeatHours
        personID
        completed
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        AssignedTo {
          nextToken
          startedAt
        }
        Owner {
          nextToken
          startedAt
        }
      }
    }
  }
`;
