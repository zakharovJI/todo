import "../../assets/symbols/close.svg"

export default {
  name: 'Sticker',
  props: {
    todo: {}
  },
  data() {
    return {
      sortedTodoList: this.todo.list.sort((a) => a.done ? 1 : -1)
    }
  },
  computed: {
  },
  methods: {
    // После того как нажата кнопка удаления заметки открывается попап, в который передается id заметки
    // для подтверждения ее удаления

    todoItemRemoveClicked() {
      this.$store.commit('setPopupAction', 'remove');
      this.$store.commit('todos/setTodoIdForAction', this.todo.id);
      this.$store.commit('openPopup');
    },
    todoItemEditClicked() {
      this.$store.dispatch('todos/setTodoForEdit', this.todo.id);
      this.$router.push('/edit');
    }
  }
}