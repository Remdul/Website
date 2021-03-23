/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listRewards = /* GraphQL */ `
  query ListRewards(
    $filter: ModelRewardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRewards(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        RewardPeople {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getReward = /* GraphQL */ `
  query GetReward($id: ID!) {
    getReward(id: $id) {
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
export const syncRewards = /* GraphQL */ `
  query SyncRewards(
    $filter: ModelRewardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRewards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        RewardPeople {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getFamily = /* GraphQL */ `
  query GetFamily($id: ID!) {
    getFamily(id: $id) {
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
export const listFamilys = /* GraphQL */ `
  query ListFamilys(
    $filter: ModelFamilyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFamilys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        familyName
        avata
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Rewards {
          nextToken
          startedAt
        }
        People {
          nextToken
          startedAt
        }
        Tasks {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFamilies = /* GraphQL */ `
  query SyncFamilies(
    $filter: ModelFamilyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFamilies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        familyName
        avata
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Rewards {
          nextToken
          startedAt
        }
        People {
          nextToken
          startedAt
        }
        Tasks {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listPersons = /* GraphQL */ `
  query ListPersons(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
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
export const syncPeople = /* GraphQL */ `
  query SyncPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPeople(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        AssignedTo {
          nextToken
          startedAt
        }
        Owner {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        AssignedTo {
          nextToken
          startedAt
        }
        Owner {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getPrivateNote = /* GraphQL */ `
  query GetPrivateNote($id: ID!) {
    getPrivateNote(id: $id) {
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
export const listPrivateNotes = /* GraphQL */ `
  query ListPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPrivateNotes = /* GraphQL */ `
  query SyncPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrivateNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        content
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTaskPeople = /* GraphQL */ `
  query SyncTaskPeople(
    $filter: ModelTaskPersonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTaskPeople(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRewardPeople = /* GraphQL */ `
  query SyncRewardPeople(
    $filter: ModelRewardPersonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRewardPeople(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
