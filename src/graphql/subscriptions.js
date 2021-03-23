/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReward = /* GraphQL */ `
  subscription OnCreateReward {
    onCreateReward {
      id
      title
      description
      value
      expires
      repeatable
      repeatHour
      claimed
      familyID
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      RewardPeople {
        items {
          id
          rewardID
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
export const onUpdateReward = /* GraphQL */ `
  subscription OnUpdateReward {
    onUpdateReward {
      id
      title
      description
      value
      expires
      repeatable
      repeatHour
      claimed
      familyID
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      RewardPeople {
        items {
          id
          rewardID
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
export const onDeleteReward = /* GraphQL */ `
  subscription OnDeleteReward {
    onDeleteReward {
      id
      title
      description
      value
      expires
      repeatable
      repeatHour
      claimed
      familyID
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      RewardPeople {
        items {
          id
          rewardID
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
      avata
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Rewards {
        items {
          id
          title
          description
          value
          expires
          repeatable
          repeatHour
          claimed
          familyID
          image
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
          avatar
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Tasks {
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
          familyID
          image
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
      avata
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Rewards {
        items {
          id
          title
          description
          value
          expires
          repeatable
          repeatHour
          claimed
          familyID
          image
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
          avatar
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Tasks {
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
          familyID
          image
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
      avata
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Rewards {
        items {
          id
          title
          description
          value
          expires
          repeatable
          repeatHour
          claimed
          familyID
          image
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
          avatar
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Tasks {
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
          familyID
          image
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
      points
      taskID
      avatar
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
          familyID
          image
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
      rewards {
        items {
          id
          rewardID
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
      points
      taskID
      avatar
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
          familyID
          image
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
      rewards {
        items {
          id
          rewardID
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
      points
      taskID
      avatar
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
          familyID
          image
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
      rewards {
        items {
          id
          rewardID
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
      familyID
      image
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
          avatar
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
      familyID
      image
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
          avatar
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
      familyID
      image
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
          avatar
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
        avatar
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
        rewards {
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
        familyID
        image
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
export const onUpdateTaskPerson = /* GraphQL */ `
  subscription OnUpdateTaskPerson {
    onUpdateTaskPerson {
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
        avatar
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
        rewards {
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
        familyID
        image
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
export const onDeleteTaskPerson = /* GraphQL */ `
  subscription OnDeleteTaskPerson {
    onDeleteTaskPerson {
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
        avatar
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
        rewards {
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
        familyID
        image
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
export const onCreateRewardPerson = /* GraphQL */ `
  subscription OnCreateRewardPerson {
    onCreateRewardPerson {
      id
      rewardID
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      reward {
        id
        title
        description
        value
        expires
        repeatable
        repeatHour
        claimed
        familyID
        image
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        RewardPeople {
          nextToken
          startedAt
        }
      }
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
        avatar
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
        rewards {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onUpdateRewardPerson = /* GraphQL */ `
  subscription OnUpdateRewardPerson {
    onUpdateRewardPerson {
      id
      rewardID
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      reward {
        id
        title
        description
        value
        expires
        repeatable
        repeatHour
        claimed
        familyID
        image
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        RewardPeople {
          nextToken
          startedAt
        }
      }
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
        avatar
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
        rewards {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onDeleteRewardPerson = /* GraphQL */ `
  subscription OnDeleteRewardPerson {
    onDeleteRewardPerson {
      id
      rewardID
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      reward {
        id
        title
        description
        value
        expires
        repeatable
        repeatHour
        claimed
        familyID
        image
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        RewardPeople {
          nextToken
          startedAt
        }
      }
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
        avatar
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
        rewards {
          nextToken
          startedAt
        }
      }
    }
  }
`;
