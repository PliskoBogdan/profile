<template>
  <div class="profile-contact-block">
    <div class="profile-contact-block__icon">
      <MdiIcon :icon="props.icon" />
    </div>
    <div class="profile-contact-block__content">
      <span class="profile-contact-block__title">{{ props.title }}</span>
      <span class="profile-contact-block__subtitle">{{ props.subtitle }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: String;
  title: String;
  subtitle: String;
}>();
</script>

<style scoped lang="scss">
.profile-contact-block {
  display: grid;
  grid-template-columns: 3fr 9fr;
}
</style>
