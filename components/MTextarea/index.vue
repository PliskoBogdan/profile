<template>
  <div class="m-textarea">
    <textarea ref="textarea" :placeholder="props.placeholder" />
    <div ref="resizeHandle" class="resize-handle">
      <img src="/images/icons/resize.svg" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps<{
  placeholder?: string;
  modelValue: string;
}>();

const textarea = ref<HTMLTextAreaElement | null>(null);
const resizeHandle = ref<HTMLDivElement  |null>(null);

onMounted(() => {
  if (resizeHandle.value) {
    resizeHandle.value.addEventListener('mousedown', (event) => {
      event.preventDefault();

      const startY = event.clientY;
      const startHeight = parseInt(window.getComputedStyle(textarea.value!).height, 10);

      const doDrag = (dragEvent: MouseEvent) => {
        textarea.value!.style.height = (startHeight + dragEvent.clientY - startY) + 'px';
      };

      const stopDrag = () => {
        document.documentElement.removeEventListener('mousemove', doDrag);
        document.documentElement.removeEventListener('mouseup', stopDrag);
      };

      document.documentElement.addEventListener('mousemove', doDrag);
      document.documentElement.addEventListener('mouseup', stopDrag);
    });
  }
});

</script>

<style lang="scss" scoped>
.m-textarea {
  width: 100%;
  position: relative;
  display: inline-block;

  textarea {
    width: 100%;
    background: theme("colors.grey.200");
    border: 2px solid theme("colors.black.500");
    border-radius: 0.4rem;
    padding: 0.8rem;
    color: theme("colors.grey.40");

    resize: none;

    &::placeholder {
      color: theme("colors.grey.40");
      font-weight: 500;
    }

    &:focus {
      outline: none;
      border-color: theme("colors.grey.100");
    }
  }
}

.resize-handle {
    width: 10px; /* Ширина заглушки */
    height: 10px; /* Высота заглушки */
    background-color: #aaa; /* Цвет заглушки */
    position: absolute;
    right: 2px;
    bottom: 9px;
    cursor: nwse-resize; /* Курсор для изменения размера */
    border-radius: 40%;
    img {
      border-radius: 20%;
      background: theme("colors.grey.200");
    }
}
</style>
