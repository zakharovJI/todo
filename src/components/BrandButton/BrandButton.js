export default {
  name: 'BranButton',
  props: {
    label: {
      type: String,
      required: true
    },
    themeLight: {
      type: Boolean,
      required: false,
      default: false
    },
    themeRed: {
      type: Boolean,
      required: false,
      default: false
    },
    themeGreen: {
      type: Boolean,
      required: false,
      default: false
    },
    disable: {
      type: Boolean,
      required: false,
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