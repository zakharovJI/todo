import BrandButton from "../../components/BrandButton/BrandButton.vue";
import TodoItem from "../../components/TodoItem/TodoItem.vue";
import BrandInput from "../../components/BrandInput/BrandInput.vue";

export default {
  name: 'CreatePage',
  components: {
   BrandButton,
    TodoItem,
    BrandInput
  },
  props: {

  },
  data() {
    return {
      count : 1
    }
  },
  computed: {
    todoItemList() {
      return this.$store.getters['todos/getTodoListForCreating'];
    }
  },
  methods: {
    addTodoButtonClicked() {
      if (!this.$refs.todoItem || [this.$refs.todoItem]?.flat()?.slice(-1)[0].selfTodoForInput) {
        this.$store.commit('todos/addToTodoListForCreating', {id: this.count});
        this.count++;
      }
    },
    titleInput() {
      this.$store.commit('todos/setTitleForCreating', this.$refs.todoTitleInput.selfValue)
    }
  }
}