<template>
  <div class="m-input">
    <input
      type="text"
      :class="{ 'm-input--error': isValidationError && props.modelValue }"
      :placeholder="props.label"
      :value="props.modelValue"
      @input="updateValue"
    />
    <Transition name="fade">
      <span
        v-if="isValidationError && props.validation?.length && props.modelValue"
        class="m-input__error-text"
        >Incorrect format</span
      >
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
type Validation = Array<(value: string) => boolean>;

const props = defineProps<{
  label?: string;
  modelValue: string;
  validation?: Validation;
}>();
const emit = defineEmits(["update:modelValue"]);

const isValidationError = ref<boolean>(false);

const updateValue = (event: Event) => {
  const value = (event.target as HTMLInputElement)?.value || "";

  emit("update:modelValue", value);

  if (!props.validation?.length) {
    return;
  }

  for (let i = 0; i < props.validation.length; i++) {
    const currentValidation = props.validation[i];

    const isValid = currentValidation(value);
    if (!isValid) {
      isValidationError.value = true;
      return;
    } else {
      isValidationError.value = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.m-input {
  position: relative;
  display: flex;
  input {
    padding: 0.8rem;
    width: 100%;
    border-radius: 0.4rem;
    background: theme("colors.grey.200");
    border: 2px solid theme("colors.black.500");
    color: theme("colors.grey.40");
    font-weight: 500;
    transition: 0.7s;
    &:focus {
      outline: none;
      border-color: theme("colors.grey.100");
    }
    &::placeholder {
      color: theme("colors.grey.40");
      font-weight: 500;
    }
  }
  &__error-text {
    color: theme("colors.red.100");
    position: absolute;
    bottom: -1.4rem;
  }
  &--error {
    border: 2px solid theme("colors.red.100") !important;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
