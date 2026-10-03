<template>
  <div class="default-layout">
    <div class="main-container">
      <div class="main-wrapper">
        <Profile class="desktop-only" />

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
    id: 0,
    title: "Profile",
    to: "/profile",
    routeName: "profile",
    mobileOnly: true,
  },
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
  // {
  //   id: 3,
  //   title: "Portfolio",
  //   to: "/portfolio",
  //   routeName: "resume"
  // },
  {
    id: 4,
    title: "Contact",
    to: "/contact",
    routeName: "resume"
  },
];

const nameByRouteName: Record<string, string> = {
  profile: "Profile",
  index: "About me",
  resume: "Resume",
  portfolio: 'Portfolio',
  contact: 'Contact me'
};

const route = useRoute();
const { $firstCapitalize } = useNuxtApp();

const router = useRouter();

// On mobile the Profile card is a separate first tab (the sidebar is hidden),
// and it is the default landing page; on desktop /profile makes no sense.
onMounted(() => {
  const mq = window.matchMedia("(max-width: 744px)");
  if (mq.matches && route.path === "/") router.replace("/profile");
  else if (!mq.matches && route.path === "/profile") router.replace("/");

  mq.addEventListener("change", (e) => {
    if (!e.matches && route.path === "/profile") router.replace("/");
  });
});

const activeLink = ref<string>(navbarItems[0].to);

const onNavChange = (item: NavItem): void => {
  activeLink.value = item.to;
};

const currPageName = computed<string>(() => nameByRouteName[route.name]);
</script>

<style lang="scss">
aside {
   @media (max-width: $mobile) {
     display: flex;
     flex-direction: column;
     gap: 24px;
   }
}
.desktop-only {
  @media (max-width: $mobile) {
    display: none !important;
  }
}
.default-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: theme("colors.mainBg");

  @media (max-width: $mobile) {
    height: auto;
    min-height: 100vh;
    min-height: 100dvh;
    align-items: stretch;
  }
}

.main-container {
  width: 1300px;

  @media (max-width: $mobile) {
    display: flex;
    flex-direction: column;
  }
}
.main-wrapper {
  display: grid;
  grid-template-columns: 3fr 9fr;
  gap: 1rem;

  @media (max-width: $mobile) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    flex: 1;
  }
}
aside {
  border-radius: var(--border-main);
  position: relative;
  display: flex;
  flex-direction: column;
}

.navbar-wrapper {
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: $mobile) {
      position: static;
  }
}
.aside-content-wrapper {
  padding: 0rem 1rem 1.3rem 1rem;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;

  > * {
    flex: 1;
    min-height: 0;
  }
}
.page-name {
  padding: 1rem;

  @media (max-width: $mobile) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0;
  }

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
