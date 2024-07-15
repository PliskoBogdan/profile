<template>
  <div class="profile-contact-block">
    <div class="profile-contact-block__icon">
      <MIcon :icon="props.icon" />
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
  padding: 0.4rem 0rem;
  
  &__icon {
    height: 50px;
    background: theme('colors.black.500');
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-main);

    ::v-deep path {
      fill: theme('colors.yellow.300') !important
    }

    svg {
      width: 2rem !important;
      height: 2rem !important;
    }
  }

  &__title {
    color: theme('colors.grey.100');
    font-size: 13px;
    text-transform: uppercase;
  }
  &__subtitle {
    font-size: 12px;
    color: theme('colors.white.text')
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    justify-content: center;
  }
}
</style>
