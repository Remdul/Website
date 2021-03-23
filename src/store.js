import Vuex from 'vuex'
import Vue from 'vue'
import { API, Auth } from 'aws-amplify';
import { listTasks, getPerson } from './graphql/queries';

import axios from "axios"

Vue.use(Vuex)


const s4 = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
const guid = () => s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4()


const actions = {
  setIsAuthenticated ({ commit }, isAuthenticated) {
    commit('isAuthenticated', isAuthenticated)
  },
  setUser ({ commit }, user) {
    commit('setUser', user)
  },
  async saveTaskBoard({ commit }, payload) {
    commit("SAVE_TASKBOARD", payload)
  },
  async archiveTaskBoard({ commit }, payload) {
    commit("ARCHIVE_TASKBOARD", payload)
  },
  async restoreTaskBoard({ commit }, payload) {
    commit("RESTORE_TASKBOARD", payload)
  },
  async setActiveTaskBoard({ commit }, payload) {
    commit("SET_ACTIVE_TASKBOARD", payload)
  },
  async saveTaskList({ commit }, payload) {
    commit("SAVE_TASKLIST", payload)
  },
  async archiveTaskList({ commit }, payload) {
    commit("ARCHIVE_TASKLIST", payload)
  },
  async restoreTaskList({ commit }, payload) {
    commit("RESTORE_TASKLIST", payload)
  },

  async reorderTaskLists({ commit }, payload) {
    commit("REORDER_TASKLISTS", payload)
  },
  async reorderTaskListItems({ commit }, payload) {
    commit("REORDER_TASKLIST_ITEMS", payload)
  },

  async saveTaskListItem({ commit }, payload) {
    commit("SAVE_TASKLIST_ITEM", payload)
  },
  async deleteTaskListItem({ commit }, payload) {
    commit("DELETE_TASKLIST_ITEM", payload)
  },

  /*async fetchData({ commit }) {
    commit("SET_LOADING_STATE", true)
    const { attributes } = await Auth.currentUserInfo();
    var currentUserID = attributes.sub;
    var currentUser = await API.graphql({
      query: getPerson,
      variables: {id: currentUserID },
    });
    var familyID = currentUser.data.getPerson.familyID;

    const todos = await API.graphql({
      query: listTasks
    });
    
    var tasks = todos.data.listTasks.items.filter(item => item._deleted !== true && item.completed !== true && item.familyID === familyID);
    commit("SET_INITIAL_DATA", tasks)
    commit("SET_LOADING_STATE", false)  
    console.log("FETCHDATA: ", tasks)
    //return tasks;
    var temp = [

      
      
      ]
    return {
      
      
      
      
      
    }
  },*/
  
  
    async fetchData({ commit }) {
    commit("SET_LOADING_STATE", true)
    var data = [
    {
      "id": "family1",
      "name": "Family 1 (Insert Name Here)",
      "description": "Family Tasks",
      "archived": false,
      "lists": [{
          "id": "4a62105f-6d1c-a84d-c7bc-5ee29a13afa3",
          "name": "Unassigned",
          "headerColor": "#607d8b",
          "archived": false,
          "items": [{
              "id": "6fb2c8e6-5980-9403-f847-51407ab4597a",
              "text": "Test #1"
            },
            {
              "id": "c7f25d4b-6a72-d0d5-7d03-fc0b8794fb94",
              "text": "Test #2"
            },
            {
              "id": "78ab7725-ddee-ba6a-c039-b581ea10e20e",
              "text": "Test #3"
            },
            {
              "id": "49ad2dd1-5c3e-42e7-c2f0-5c9b193fb676",
              "text": "Test #4"
            }
          ]
        },
        {
          "id": "e0984073-01ee-0f99-0226-4ce9985f3b85",
          "name": "Dad",
          "headerColor": "#607d8b",
          "archived": false,
          "items": [{
              "id": "081107d7-acb8-93bf-1e49-86da87bbbaf7",
              "text": "Kick the Dog"
            },
            {
              "id": "065d84e2-85e9-5845-23a8-64bfba70f2b3",
              "text": "Put out Trash"
            },
            {
              "id": "30cba164-c4c6-6eb0-99af-4ff86b3ed4ae",
              "text": "Sleep by 7pm"
            }
          ]
        },
        {
          "id": "2f820d90-d965-179b-9957-bf396622a887",
          "name": "Wife",
          "headerColor": "#607d8b",
          "archived": false,
          "items": [{
              "id": "850ca944-ea57-40dd-dc53-1993c0a724d2",
              "text": "Sweep Floors"
            },
            {
              "id": "e773b655-8314-23f1-9188-3d295b700cb2",
              "text": "Treasure Husband"
            }
          ]
        },
        {
          "id": "521aeae2-e17c-97e2-f1fb-6134b3d6e795",
          "name": "Kid 1",
          "headerColor": "#607d8b",
          "archived": false,
          "items": [{
              "id": "3b93acb4-41cf-05e0-55d0-886930342e6e",
              "text": "Do homework"
            },
            {
              "id": "8d084b74-1e56-7b03-1c46-ebd5e15d6fc4",
              "text": "Dance like a princess"
            }
          ]
        },
        {
          "id": "4f654d15-fc58-0885-89a9-2ce1b64320bf5",
          "name": "Kid 2",
          "headerColor": "#607d8b",
          "archived": false,
          "items": [{
              "id": "2e855cd8-244d-9f18-3f9d-310b75ff1801",
              "text": "Feed Fish"
            },
            {
              "id": "5ca2a09d-62b9-39da-c0b0-510694cf6d13",
              "text": "Build legos"
            },
            {
              "id": "fe8abdb4-41b6-b577-660c-ab4466bcea83",
              "text": "Get frustrated at bedtime"
            }
          ]
        }
      ]
    },
  ]
    commit("SET_LOADING_STATE", false)
    commit("SET_INITIAL_DATA", data)
    return data;
  },
}

const mutations = {
   isAuthenticated(state, isAuthenticated) {
     state.isAuthenticated = isAuthenticated
   },
   setUser(state, user) {
    state.user = user
  },
  SET_INITIAL_DATA(state, payload) {
    state.boards = payload
  },

  // Set Loading State
  SET_LOADING_STATE(state, payload) {
    state.isLoading = payload
  },

  // Save Task Board
  SAVE_TASKBOARD(state, payload) {
    const board = state.boards.find(b => b.id == payload.id)
    const itemIdx = state.boards.findIndex(b => b.id == payload.id)

    // For existing item
    if (itemIdx > -1) {
      board.name = payload.name
      board.description = payload.description
      Vue.set(state.boards, itemIdx, board)
    }
    // For new item
    else {
      const board = {
        id: guid(),
        name: payload.name,
        description: payload.description,
        archived: false,
        lists: []
      }
      state.boards.push(board)
    }
  },

  // Archive Task Board
  ARCHIVE_TASKBOARD(state, payload) {
    const board = state.boards.find(b => b.id == payload.boardId)
    const boardIdx = state.boards.findIndex(b => b.id == payload.boardId)
    board.archived = true
    Vue.set(state.boards, boardIdx, board)
  },

  // Restore Task Board
  RESTORE_TASKBOARD(state, payload) {
    const board = state.boards.find(b => b.id == payload.boardId)
    const boardIdx = state.boards.findIndex(b => b.id == payload.boardId)
    board.archived = false
    Vue.set(state.boards, boardIdx, board)
  },

  // Save Task List
  SAVE_TASKLIST(state, payload) {
    const board = state.boards.find(b => b.id == payload.boardId)
    const list = board.lists.find(l => l.id == payload.listId)
    const listIdx = board.lists.findIndex(l => l.id == payload.listId)

    // For existing item
    if (listIdx > -1) {
      list.name = payload.name
      Vue.set(board.lists, listIdx, list)
    }
    // // For new item
    else {
      const list = {
        id: guid(),
        name: payload.name,
        headerColor: "#607d8b",
        archived: false,
        items: []
      }
      board.lists.push(list)
    }
  },

  // Archive Task List
  ARCHIVE_TASKLIST(state, payload) {
    const board = state.boards.find(b => b.id == payload.boardId)
    const list = board.lists.find(l => l.id == payload.listId)
    const listIdx = board.lists.findIndex(l => l.id == payload.listId)
    list.archived = true
    Vue.set(board.lists, listIdx, list)
  },

  // Restore Task List
  RESTORE_TASKLIST(state, payload) {
    const board = state.boards.find(b => b.id == payload.boardId)
    const list = board.lists.find(l => l.id == payload.listId)
    const listIdx = board.lists.findIndex(l => l.id == payload.listId)
    list.archived = false
    Vue.set(board.lists, listIdx, list)
  },

  // Reorder TaskBoad Lists
  REORDER_TASKLISTS(state, payload) {
    const board = state.boards.find(b => b.id == payload.boardId)
    Vue.set(board, "lists", payload.lists)
  },

  // Reorder Task List Items
  REORDER_TASKLIST_ITEMS(state, payload) {
    const board = state.boards.find(b => b.id == payload.boardId)
    const listIdx = board.lists.findIndex(l => l.id == payload.listId)
    Vue.set(board.lists[listIdx], "items", payload.items)
  },

  // Set Active Board
  SET_ACTIVE_TASKBOARD(state, payload) {
    state.activeBoard = payload.board
  },

  // Save Task List Item
  SAVE_TASKLIST_ITEM(state, payload) {
    const board = state.boards.find(b => b.id == payload.boardId)
    const list = board.lists.find(l => l.id == payload.listId)
    const itemIdx = list.items.findIndex(item => item.id == payload.item.id)

    // For existing item
    if (itemIdx > -1) {
      Vue.set(list.items, itemIdx, payload.item)
    }
    // For new item
    else {
      payload.item.id = guid()
      list.items.push(payload.item)
    }
  },

  // Delete Task List Item
  DELETE_TASKLIST_ITEM(state, payload) {
    const board = state.boards.find(b => b.id == payload.boardId)
    const list = board.lists.find(l => l.id == payload.listId)
    const itemIdx = list.items.findIndex(item => item.id == payload.item.id)
    // For existing item
    if (itemIdx > -1) {
      Vue.delete(list.items, itemIdx)
    }
  }
}

const store = new Vuex.Store({
  state: {
    isAuthenticated: false,
    isLoading: true,
    activeBoard: null,
    boards: [],
    user: {}
  },
  
  getters: {
    user: (state) => state.user,
      isLoading: state => state.isLoading,
      allBoards: state => state.boards,
      activeBoard: state => state.activeBoard,
      unarchivedBoards: state => state.boards.filter(b => !b.archived),
      archivedBoards: state => state.boards.filter(b => b.archived),
      archivedLists: state => (state.activeBoard ? state.activeBoard.lists.filter(l => l.archived) : []),
      unarchivedLists: state => (state.activeBoard ? state.activeBoard.lists.filter(l => !l.archived) : [])

  },

  actions,
  mutations
})

export default store