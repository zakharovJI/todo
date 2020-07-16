export default {
  props: {
    placeholder: {},
    value: {
      default: null
    }
  },
  data() {
    return {
      selfValue: this.value,
      stateFocused: false,
      stateFilled: false,
    }
  },
  computed: {
  },
  mounted() {
    if (this.value) {
      this.$refs.inputField.value = this.value
    }
  },
  methods: {
    onFocus(e) {
      this.stateFocused = true;
    },
    onBlur(e) {
      this.stateFocused = false;
    },
    onClick(e) {
      this.$emit('click', e);
    },
    onInput(e) {
      this.stateFilled = !!this.selfValue;
      this.$emit('input', this.selfValue);
    },
  }
}