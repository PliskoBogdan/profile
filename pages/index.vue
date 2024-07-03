<template>
    <div class="main-container">
        <div class="main-wrapper">

            <!-- <section class="bg-green-default">section</section> -->
            <Profile />
            <aside class="bg-green-default">aside</aside>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main-container  {
    width: 1300px;
}
.main-wrapper {
    display: grid;
    grid-template-columns: 3fr 9fr;
    gap: 1rem;
}
</style>