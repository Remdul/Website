/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createFamily = /* GraphQL */ `
  mutation CreateFamily(
    $input: CreateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    createFamily(input: $input, condition: $condition) {
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
export const updateFamily = /* GraphQL */ `
  mutation UpdateFamily(
    $input: UpdateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    updateFamily(input: $input, condition: $condition) {
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
export const deleteFamily = /* GraphQL */ `
  mutation DeleteFamily(
    $input: DeleteFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    deleteFamily(input: $input, condition: $condition) {
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
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $input: CreatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    createPrivateNote(input: $input, condition: $condition) {
      id
      content
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
export const updateTaskPerson = /* GraphQL */ `
  mutation UpdateTaskPerson(
    $input: UpdateTaskPersonInput!
    $condition: ModelTaskPersonConditionInput
  ) {
    updateTaskPerson(input: $input, condition: $condition) {
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
export const deleteTaskPerson = /* GraphQL */ `
  mutation DeleteTaskPerson(
    $input: DeleteTaskPersonInput!
    $condition: ModelTaskPersonConditionInput
  ) {
    deleteTaskPerson(input: $input, condition: $condition) {
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
export const createRewardPerson = /* GraphQL */ `
  mutation CreateRewardPerson(
    $input: CreateRewardPersonInput!
    $condition: ModelRewardPersonConditionInput
  ) {
    createRewardPerson(input: $input, condition: $condition) {
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
export const updateRewardPerson = /* GraphQL */ `
  mutation UpdateRewardPerson(
    $input: UpdateRewardPersonInput!
    $condition: ModelRewardPersonConditionInput
  ) {
    updateRewardPerson(input: $input, condition: $condition) {
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
export const deleteRewardPerson = /* GraphQL */ `
  mutation DeleteRewardPerson(
    $input: DeleteRewardPersonInput!
    $condition: ModelRewardPersonConditionInput
  ) {
    deleteRewardPerson(input: $input, condition: $condition) {
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
