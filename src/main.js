import Vue from 'vue'
import App from './App/App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.addEventListener('beforeunload', function () {
  const todoList = store.getters['todos/getTodoList'];
  const todoListIdCount = store.getters['todos/getTodoListIdCount'];

  window.localStorage.setItem('todoList', JSON.stringify({list: todoList}));
  window.localStorage.setItem('todoListIdCount', todoListIdCount);
});