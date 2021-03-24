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
export const onUpdateReward = /* GraphQL */ `
  subscription OnUpdateReward {
    onUpdateReward {
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
export const onDeleteReward = /* GraphQL */ `
  subscription OnDeleteReward {
    onDeleteReward {
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
export const onCreateFamily = /* GraphQL */ `
  subscription OnCreateFamily {
    onCreateFamily {
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
export const onUpdateFamily = /* GraphQL */ `
  subscription OnUpdateFamily {
    onUpdateFamily {
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
export const onDeleteFamily = /* GraphQL */ `
  subscription OnDeleteFamily {
    onDeleteFamily {
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
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson {
    onCreatePerson {
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
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson {
    onUpdatePerson {
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
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson {
    onDeletePerson {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote($owner: String!) {
    onCreatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote($owner: String!) {
    onUpdatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote($owner: String!) {
    onDeletePrivateNote(owner: $owner) {
      id
      content
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
      person {
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
      createdAt
      updatedAt
      owner
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
      person {
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
      createdAt
      updatedAt
      owner
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
      person {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateRewardPerson = /* GraphQL */ `
  subscription OnCreateRewardPerson {
    onCreateRewardPerson {
      id
      rewardID
      personID
      reward {
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
      person {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateRewardPerson = /* GraphQL */ `
  subscription OnUpdateRewardPerson {
    onUpdateRewardPerson {
      id
      rewardID
      personID
      reward {
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
      person {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteRewardPerson = /* GraphQL */ `
  subscription OnDeleteRewardPerson {
    onDeleteRewardPerson {
      id
      rewardID
      personID
      reward {
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
      person {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
