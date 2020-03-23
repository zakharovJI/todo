import Sticker from "../../components/Sticker/Sticker.vue";

export default {
  name: 'MainPage',
  components: {
    Sticker
  },
  computed: {
    todoList() {
      return this.$store.getters['todos/getTodoList'];
    }
  }
}