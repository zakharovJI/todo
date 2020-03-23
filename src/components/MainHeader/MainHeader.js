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
      return this.$route.path.length > 1 ? 'Сохранить' : 'Создать заметку'
    }
  },

  methods: {
    actionButtonClicked() {
      if (this.pageState === 'create') {
          this.$store.dispatch('todos/addTodoItemToList').then(() => {
          this.$router.push('/');
        })
      } else if (this.pageState === 'edit') {
        this.$store.dispatch('todos/replaceTodo').then(() => {
          this.$store.commit('todos/clearTodoIdForAction');
          this.$store.commit('todos/clearTodoListForCreating');
          this.$router.push('/');
        })
      } else {
        this.$router.push('/create')
      }
    },
    backButtonClicked() {
      if (this.pageState === 'edit') {
        this.$store.commit('setPopupAction', 'noSave');
        this.$store.commit('openPopup');
      } else {
        this.$store.dispatch('clearCurrentHelperInfo');

        this.$router.go(-1);
      }
    }
  }
}