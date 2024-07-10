<template>
  <div class="default-layout">
    <div class="main-container">
      <div class="main-wrapper">
        <Profile />

        <aside class="bg-grey-200">
          <div class="navbar-wrapper">
            <MNavBar :items="navbarItems" @change="onNavChange" />
          </div>
          <slot />
        </aside>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { NavItem } from "@/components/types/MNavBar";

const navbarItems: NavItem[] = [
  {
    id: 1,
    title: "About",
    to: "about",
  },
  {
    id: 2,
    title: "Resume",
    to: "resume",
  },
  {
    id: 3,
    title: "Portfolio",
    to: "portfolio",
  },
  {
    id: 4,
    title: "Contact",
    to: "contact",
  },
];

const activeLink = ref<string>(navbarItems[0].to);

const onNavChange = (item: NavItem) => {
  activeLink.value = item.to;
  console.log(activeLink.value);
};
</script>

<style lang="scss">
.default-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: theme("colors.mainBg");
}

.main-container {
  width: 1300px;
}
.main-wrapper {
  display: grid;
  grid-template-columns: 3fr 9fr;
  gap: 1rem;
}
aside {
  border-radius: var(--border-main);
  position: relative;
}

.navbar-wrapper {
  position: absolute;
  right: 0;
}
</style>
