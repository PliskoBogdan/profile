<template>
  <div class="default-layout">
    <slot />
  </div>
</template>

<style lang="scss">
  .default-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: theme('colors.mainBg');
  }
</style>
