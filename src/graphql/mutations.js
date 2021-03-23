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
export const createReward = /* GraphQL */ `
  mutation CreateReward(
    $input: CreateRewardInput!
    $condition: ModelRewardConditionInput
  ) {
    createReward(input: $input, condition: $condition) {
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
export const updateReward = /* GraphQL */ `
  mutation UpdateReward(
    $input: UpdateRewardInput!
    $condition: ModelRewardConditionInput
  ) {
    updateReward(input: $input, condition: $condition) {
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
export const deleteReward = /* GraphQL */ `
  mutation DeleteReward(
    $input: DeleteRewardInput!
    $condition: ModelRewardConditionInput
  ) {
    deleteReward(input: $input, condition: $condition) {
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
export const createFamily = /* GraphQL */ `
  mutation CreateFamily(
    $input: CreateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    createFamily(input: $input, condition: $condition) {
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
export const updateFamily = /* GraphQL */ `
  mutation UpdateFamily(
    $input: UpdateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    updateFamily(input: $input, condition: $condition) {
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
export const createRewardPerson = /* GraphQL */ `
  mutation CreateRewardPerson(
    $input: CreateRewardPersonInput!
    $condition: ModelRewardPersonConditionInput
  ) {
    createRewardPerson(input: $input, condition: $condition) {
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
export const updateRewardPerson = /* GraphQL */ `
  mutation UpdateRewardPerson(
    $input: UpdateRewardPersonInput!
    $condition: ModelRewardPersonConditionInput
  ) {
    updateRewardPerson(input: $input, condition: $condition) {
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
export const deleteRewardPerson = /* GraphQL */ `
  mutation DeleteRewardPerson(
    $input: DeleteRewardPersonInput!
    $condition: ModelRewardPersonConditionInput
  ) {
    deleteRewardPerson(input: $input, condition: $condition) {
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
