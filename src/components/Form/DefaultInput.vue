<template>
  <div
    class="input-wrapper"
    :class="[{ error }, { focused: focused || value }]"
  >
    <div class="input__label" v-if="label">{{ label }}</div>
    <input
      :type="type"
      v-model="inputValue"
      :placeholder="placeholder"
      @focus="focused = true"
      @blur="focused = false"
      @keydown.enter="$emit('enter')"
    />
  </div>
</template>

<script>
export default {
  name: "DefaultInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
      required: true,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      focused: false,
    };
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.input {
  &-wrapper {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
    position: relative;
    &.error {
      border-color: #a80303;
      .input__label {
        color: #a80303;
      }
    }

    &.focused {
      .input__label {
        top: 0;
        font-size: 12px;
      }
    }
    input {
      width: 100%;
      height: 100%;
      padding: 10px;
    }
  }
  &__label {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
    background: #fff;
    padding: 0 5px;
    transition-duration: 0.76s;
  }
}
</style>
