/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
      points
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      TaskPeople {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      description
      status
      points
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      TaskPeople {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      description
      status
      points
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      TaskPeople {
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
export const onCreateFamily = /* GraphQL */ `
  subscription OnCreateFamily {
    onCreateFamily {
      id
      familyName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      People {
        items {
          id
          userName
          firstName
          lastName
          phoneNumber
          email
          familyID
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
export const onUpdateFamily = /* GraphQL */ `
  subscription OnUpdateFamily {
    onUpdateFamily {
      id
      familyName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      People {
        items {
          id
          userName
          firstName
          lastName
          phoneNumber
          email
          familyID
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
export const onDeleteFamily = /* GraphQL */ `
  subscription OnDeleteFamily {
    onDeleteFamily {
      id
      familyName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      People {
        items {
          id
          userName
          firstName
          lastName
          phoneNumber
          email
          familyID
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
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson {
    onCreatePerson {
      id
      userName
      firstName
      lastName
      phoneNumber
      email
      familyID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tasks {
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
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson {
    onUpdatePerson {
      id
      userName
      firstName
      lastName
      phoneNumber
      email
      familyID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tasks {
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
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson {
    onDeletePerson {
      id
      userName
      firstName
      lastName
      phoneNumber
      email
      familyID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tasks {
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
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote($owner: String) {
    onCreatePrivateNote(owner: $owner) {
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
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote($owner: String) {
    onUpdatePrivateNote(owner: $owner) {
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
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote($owner: String) {
    onDeletePrivateNote(owner: $owner) {
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
export const onCreateTaskPerson = /* GraphQL */ `
  subscription OnCreateTaskPerson {
    onCreateTaskPerson {
      id
      taskID
      personID
      task {
        id
        title
        description
        status
        points
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        TaskPeople {
          nextToken
          startedAt
        }
      }
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        tasks {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onUpdateTaskPerson = /* GraphQL */ `
  subscription OnUpdateTaskPerson {
    onUpdateTaskPerson {
      id
      taskID
      personID
      task {
        id
        title
        description
        status
        points
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        TaskPeople {
          nextToken
          startedAt
        }
      }
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        tasks {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onDeleteTaskPerson = /* GraphQL */ `
  subscription OnDeleteTaskPerson {
    onDeleteTaskPerson {
      id
      taskID
      personID
      task {
        id
        title
        description
        status
        points
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        TaskPeople {
          nextToken
          startedAt
        }
      }
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        tasks {
          nextToken
          startedAt
        }
      }
    }
  }
`;
