export default {
  name: 'BranButton',
  props: {
    label: {},
    themeLight: {
      default: false
    },
    themeRed: {
      default: false
    },
    themeGreen: {
      default: false
    }
  },
  data() {
    return {
      selfType: this.type,
      isMounted: false
    }
  },
  computed: {
    stateDisabled() {
      if (!this.validatable) {
        return false
      } else if (this.isMounted) {

        let state = false;

        this.$parent.$children.forEach(el => {
          if (el.$el.classList.contains('brand-input')) {
            if (el.required && (el.stateInvalid || !el.stateFilled)) {
              state = true;
            }
          }
        });

        return state;
      }
    }
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    onClick(e) {
      this.$emit('click', e);
    },
  }
}