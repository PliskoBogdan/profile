<template>
  <div class="default-layout">
    <div class="main-container">
      <div class="main-wrapper">
        <Profile />

        <aside class="bg-grey-200">
          <div class="page-name">
            <h3 class="page-name__value">
              {{ $firstCapitalize(currPageName) }}
            </h3>
            <div class="page-name__bottom-line"></div>
          </div>
          <div class="navbar-wrapper">
            <MNavBar :items="navbarItems" @change="onNavChange" />
          </div>
          <div class="aside-content-wrapper">
            <slot />
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { NavItem } from "@/components/types/MNavBar";

const navbarItems: NavItem[] = [
  {
    id: 1,
    title: "About",
    to: "/",
    routeName: "index"
  },
  {
    id: 2,
    title: "Resume",
    to: "/resume",
    routeName: "resume"
  },
  {
    id: 3,
    title: "Portfolio",
    to: "/portfolio",
    routeName: "resume"
  },
  {
    id: 4,
    title: "Contact",
    to: "/contact",
    routeName: "resume"
  },
];

const nameByRouteName: Record<string, string> = {
  index: "About me",
  resume: "Resume",
  portfolio: 'Portfolio',
  contact: 'Contact me'
};

const route = useRoute();
const { $firstCapitalize } = useNuxtApp();

const activeLink = ref<string>(navbarItems[0].to);

const onNavChange = (item: NavItem): void => {
  activeLink.value = item.to;
};

const currPageName = computed<string>(() => nameByRouteName[route.name]);
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
  top: 0;
  right: 0;
}
.aside-content-wrapper {
  padding: 0 1rem;
}
.page-name {
  padding: 1rem;
  &__value {
    font-size: 24px;
    color: theme("colors.white.text");
    font-weight: 700;
  }
  &__bottom-line {
    width: 30px;
    height: 3px;
    background: theme("colors.yellow.200");
    margin-top: 0.3rem;
  }
}
</style>
