import Vue from 'vue'
import Vuex from 'vuex'

import todos from "./modules/todos"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos
  },
  devtools: true,
  state: {
    popupShowState: false,
    popupAction: null
  },
  getters: {
    getPopupShowState: state => state.popupShowState,
    getPopupAction: state => state.popupAction
  },
  actions: {
    clearCurrentHelperInfo({commit}) {
      commit('todos/clearTodoIdForAction');
      commit('todos/clearTodoListForCreating');
      commit('clearPopupAction');
      commit('closePopup');
    }
  },
  mutations: {
    closePopup: (state) => {
      state.popupShowState = false;
    },
    openPopup: (state) => {
      state.popupShowState = true;
    },
    setPopupAction: (state, action) => {
      state.popupAction = action;
    },
    clearPopupAction: (state) => {
      state.popupAction = null;
    }
  },
});
