import BrandInput from "../BrandInput/BrandInput.vue";
import BrandButton from "../BrandButton/BrandButton.vue";

export default {
  name: 'TodoItem',
  components: {
    BrandInput,
    BrandButton
  },
  props: {
    id: {},
    state: {},
    parentId: {
      default: null
    },
    todoForInput: {
      default: null
    }
  },
  data() {
    return {
      selfTodoForInput: this.todoForInput,
      text: this.state === 'edit' ? 'Готово' : 'Удалить',
      createState: this.state !== 'edit',
      editState: this.state === 'edit',
    }
  },
  computed: {

  },
  methods: {
    deleteButtonClicked() {
      this.$store.commit('todos/removeFromTodoListForCreating', this.id);
    },
    doneButtonClicked() {
      if (!this.disable) {
        this.$store.commit('todos/checkTodoAsDoneInCreatingList', this.id);
      }
    },
    onInput() {
      // Записываем в стор значение этого пункта туду
      this.$store.commit('todos/setInputForCreating', {id: this.id, title: this.$refs.todoInput.selfValue});
    }
  }
}