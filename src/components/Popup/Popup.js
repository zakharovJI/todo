import BrandButton from "../BrandButton/BrandButton.vue";

export default {
  name: 'Popup',
  components: {
    BrandButton
  },
  props: {
    title: {
      default: 'Вы действительно хотите подтвердить это действие?'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    popupShowState() {
      return this.$store.getters['getPopupShowState'];
    }
  },
  methods: {
    cancelAction() {
      this.$store.commit('todos/clearTodoIdForAction');
      this.$store.commit('clearPopupAction');
      this.$store.commit('closePopup');
    },

    confirmAction() {
      const action = this.$store.getters['getPopupAction'];

      if (action === 'remove') {
        //
        this.$store.commit('todos/removeTodoFromList');
        this.$store.dispatch('clearCurrentHelperInfo');

        if (this.$route.path.length > 1) {
          this.$router.push('/');
        }
      } else if (action === 'noSave') {
        this.$store.commit('todos/clearTodoListForCreating');
        this.$store.dispatch('clearCurrentHelperInfo');

        this.$router.go(-1);
      }
    }
  }
}