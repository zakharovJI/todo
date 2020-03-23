import "../../assets/symbols/back.svg"

export default {
  name: 'MainHeader',
  props: {
    
  },
  data() {
    return {
      
    }
  },
  computed: {
    pageState() {
      return this.$route.path.slice(1);
    },
    buttonText() {
      return (this.$route.path.includes('edit') || this.$route.path.includes('create')) ? 'Сохранить' : 'Создать заметку'
    }
  },

  methods: {
    actionButtonClicked() {
      if (this.$route.path.includes('create')) {
          this.$store.dispatch('todos/addTodoItemToList').then(() => {
          this.$router.push('/workzone/todo/');
        })
      } else if (this.$route.path.includes('edit')) {
        this.$store.dispatch('todos/replaceTodo').then(() => {
          this.$store.commit('todos/clearTodoIdForAction');
          this.$store.commit('todos/clearTodoListForCreating');
          this.$router.push('/workzone/todo/');
        })
      } else {
        this.$router.push('/workzone/todo/create')
      }
    },
    backButtonClicked() {
      if (this.$route.path.includes('edit')) {
        this.$store.commit('setPopupAction', 'noSave');
        this.$store.commit('openPopup');
      } else {
        this.$store.dispatch('clearCurrentHelperInfo');

        this.$router.go(-1);
      }
    }
  }
}