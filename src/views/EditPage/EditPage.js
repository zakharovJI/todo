import BrandButton from "../../components/BrandButton/BrandButton.vue";
import TodoItem from "../../components/TodoItem/TodoItem.vue";
import BrandInput from "../../components/BrandInput/BrandInput.vue";
import logger from "vuex/dist/logger";

export default {
  name: 'EditPage',
  components: {
    BrandButton,
    TodoItem,
    BrandInput
  },
  props: {

  },
  data() {
    return {
      isMounted: false,
      count: 0
    }
  },
  computed: {
    todo() {
      return this.$store.getters['todos/getTodoForEdit']
    },
    todoForCreating() {
      return  this.$store.getters['todos/getTodoListForCreating']
    },
    doneTodoList() {
      return this.todoForCreating.filter(x => x.done === true);
      // return [{id: 1, done: true, title: 'afdsfdsf'},{id: 2, done: true, title: 'afdsfdsf'},{id: 3, done: true, title: 'afdsfdsf'},]
    },
    notDoneTodoList() {
      return this.todoForCreating.filter(x => x.done !== true);
    }
  },
  mounted() {
    this.isMounted = true;

    this.todo.list.forEach(item => {
      // Копируем все поля тудушки в новый массив
      this.$store.commit('todos/addToTodoListForCreating', {id: item.id, title: item.title, done: item.done});
      if (this.count < item.id/1) {
        // Подсчитываем максимальный id у полей, чтобы начать добавлять новые поля с уникальными id
        this.count = item.id/1;
      }

      this.count++;
    });

    // Копируем название тудушки
    this.titleInput()

  },
  methods: {
    addTodoButtonClicked() {
      // Добавляем новое поля туду
      if (this.$refs.todoItem?.slice(-1)[0]?.selfTodoForInput) {
        this.$store.commit('todos/addToTodoListForCreating', {id: this.count});
        this.count++;
      }
    },
    titleInput() {
      this.$store.commit('todos/setTitleForCreating', this.$refs.todoTitleInput.selfValue)
    },
    deleteTodoButton() {
      this.$store.commit('setPopupAction', 'remove');
      this.$store.commit('openPopup');

    }
  }
}