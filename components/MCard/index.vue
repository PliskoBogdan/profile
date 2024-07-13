<template>
    <div class="m-card">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.m-card {
    background: theme("colors.black.200");
    padding: 0.8rem;
    border-radius: 0.8rem;
    box-shadow:rgba(0, 0, 0, 0.67) -7px 11px 29px -27px;
    min-height: 80px;
}
</style>