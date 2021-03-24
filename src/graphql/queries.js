/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReward = /* GraphQL */ `
  query GetReward($id: ID!) {
    getReward(id: $id) {
      id
      title
      description
      value
      expires
      RewardPeople {
        items {
          id
          rewardID
          personID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      repeatable
      repeatHour
      claimed
      familyID
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
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
        RewardPeople {
          nextToken
        }
        repeatable
        repeatHour
        claimed
        familyID
        image
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getFamily = /* GraphQL */ `
  query GetFamily($id: ID!) {
    getFamily(id: $id) {
      id
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
          createdAt
          updatedAt
        }
        nextToken
      }
      familyName
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      avata
      createdAt
      updatedAt
      owner
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
        People {
          nextToken
        }
        familyName
        Tasks {
          nextToken
        }
        Rewards {
          nextToken
        }
        avata
        createdAt
        updatedAt
        owner
      }
      nextToken
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
      assignedTasks {
        items {
          id
          taskID
          personID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      email
      familyID
      points
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
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      taskID
      rewards {
        items {
          id
          rewardID
          personID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      avatar
      createdAt
      updatedAt
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
        assignedTasks {
          nextToken
        }
        email
        familyID
        points
        ownedTasks {
          nextToken
        }
        taskID
        rewards {
          nextToken
        }
        avatar
        createdAt
        updatedAt
      }
      nextToken
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
      Owner {
        items {
          id
          taskID
          personID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      repeatable
      endTime
      repeatHours
      personID
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
          createdAt
          updatedAt
        }
        nextToken
      }
      completed
      familyID
      image
      createdAt
      updatedAt
      owner
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
        Owner {
          nextToken
        }
        repeatable
        endTime
        repeatHours
        personID
        AssignedTo {
          nextToken
        }
        completed
        familyID
        image
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPrivateNote = /* GraphQL */ `
  query GetPrivateNote($id: ID!) {
    getPrivateNote(id: $id) {
      id
      content
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
