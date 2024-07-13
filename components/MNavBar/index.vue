<template>
  <ul class="m-navbar">
    <NuxtLink
      v-for="item in props.items"
      class="m-navbar__item"
      :key="item.id"
      :to="item.to"
      @click="onPageChange(item)"
    >
      {{ item.title }}
    </NuxtLink>
  </ul>
</template>

<script setup lang="ts">
import { NavItem } from "@/components/types/MNavBar";

const props = defineProps<{
  items: NavItem[];
}>();

const emit = defineEmits(["change"]);

const onPageChange = (item: NavItem): void => {
  emit("change", item);
};
</script>

<style scoped lang="scss">
  .m-navbar {
    padding: 0.8rem;
    display: flex;
    gap: 15px;
    background: theme("colors.grey.150");
    border-radius: 0px var(--border-main) 0px var(--border-main);

    &__item {
      font-size: 16px;
      color: theme("colors.grey.50");
      transition: ease-in .4s;
      font-weight: 500;
      &:hover:not(.router-link-exact-active) {
        color: #988b62;
      }
    }
  }
  .router-link-exact-active {
    color: theme("colors.yellow.200");
  }
</style>
