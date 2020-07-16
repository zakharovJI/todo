const state = {
  todoList: JSON.parse(window.localStorage.getItem('todoList') || {}),
  todoListIdCount: window.localStorage.getItem('todoListIdCount')/1 || 0,
  todoIdForAction: null,
  todoListForCreating: {
    title: null,
    group: null,
    id: window.localStorage.getItem('todoListIdCount')/1 || 0,
    list: []
  },
  todoForEdit: null
};

const getters = {
  getTodoList: state => state.todoList.list,
  getTodoListIdCount: state => state.todoListIdCount,
  getTodoForEdit: state => state.todoForEdit,
  getTodoIdForAction: state => state.todoIdForAction,
  getTodoListForCreating: state => state.todoListForCreating.list,
};

const actions = {
  addTodoItemToList({commit}) {
    commit('addTodoItemToList');
    commit('clearTodoListForCreating');
  },
  setTodoForEdit({commit}, id) {
    commit('setTodoForEdit', id);
    commit('setTodoIdForAction', id);
  },
  replaceTodo({commit}) {
    commit('replaceTodo');
  }
};

const mutations = {
  setTodoIdForAction: (state, id) => {
    state.todoIdForAction = id;
  },
  removeTodoFromList: (state) => {
    state.todoList.list = state.todoList.list.filter(x => x.id !== state.todoIdForAction)
  },
  clearTodoIdForAction: (state) => {
    state.todoIdForAction = null;
  },
  addToTodoListForCreating: (state, params) => {
    state.todoListForCreating.list.push({
      id: params.id,
      title: params.title || null,
      done: params.done || false
    });
  },
  removeFromTodoListForCreating: (state, todoId) => {
    state.todoListForCreating.list = state.todoListForCreating.list.filter(x => x.id !== todoId)
  },
  setTitleForCreating: (state, title) => {
    state.todoListForCreating.title = title;
  },
  setInputForCreating: (state, params) => {
    state.todoListForCreating.list.find(x => x.id === params.id).title = params.title;
  },
  addTodoItemToList: (state) => {
    state.todoList.list.push(state.todoListForCreating);
  },
  setTodoForEdit: (state, todoId) => {
    state.todoForEdit = state.todoList.list.find(x => x.id === todoId);
  },
  checkTodoAsDoneInCreatingList: (state, id) => {
    state.todoListForCreating.list.find(x => x.id === id).done = true;
  },
  replaceTodo: (state) => {
    let foundIndex = state.todoList.list.findIndex(x => x.id === state.todoIdForAction);
    state.todoList.list[foundIndex] = state.todoListForCreating;
  },
  clearTodoListForCreating: (state) => {
    state.todoListIdCount = state.todoListIdCount + 1;
    state.todoListForCreating = {
      title: null,
      id: state.todoListIdCount,
      list: [

      ]
    };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
