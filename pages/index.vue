<template>
    <div class="container">
        <div class="main-wrapper">

            <!-- <section class="bg-green-default">section</section> -->
            <Profile />
            <aside class="bg-green-default">aside</aside>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container  {
margin: 0 auto;
width: 50%;
padding: 10rem 1rem;
}
.main-wrapper {
    display: grid;
    grid-template-columns: 3fr 9fr;
    gap: 1rem;
}
</style>