<template>
  <div class="m-button" :class="{ 'm-button--disabled': props.disabled }">
    <button
      :disabled="props.disabled"
      @click="onClick"
    >
      <slot />
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ text?: string; disabled: boolean }>();
const emit = defineEmits(["click"]);

const onClick = (): void => {
  if (props.disabled) {
    return;
  }
  emit("click");
};
</script>

<style lang="scss" scoped>
.m-button {
  button {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem;
    border-radius: var(--border-main);
    color: theme("colors.yellow.200");
    background: theme("colors.black.500");
    transition: 0.5s ease-in;

    max-height: 50px;
    &:hover {
      color: theme("colors.yellow.100");
      -webkit-box-shadow: 0px 0px 6px -1px #0e0d0d;
      box-shadow: 0px 0px 6px -1px #0f0f0f;
    }
  }

  &--disabled {
    cursor: not-allowed;

    button {
      pointer-events: none;
    }
    opacity: 0.7;
  }
}
</style>
