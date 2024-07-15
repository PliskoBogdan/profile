<template>
  <section class="profile bg-grey-200">
    <div class="profile__avatar-block">
      <div class="profile__avatar">
        <NuxtImg
          src="/images/avatar.png"
          :placeholder="[30, 20]"
          width="100"
          height="100"
        />
      </div>
    </div>
    <h2 class="profile__name">Bohdan Plisko</h2>
    <div class="profile__role">
      <h3 class="profile__role-title">Front-end developer</h3>
    </div>
    <div class="profile__separator"></div>
    <div class="profile__contacts">
      <ProfileContactBlock
        v-for="{ id, title, subtitle, icon } in contacts"
        :key="id"
        :title="title"
        :subtitle="subtitle"
        :icon="icon"
      />
    </div>
    <div class="profile__links">
      <a
        href="https://www.linkedin.com/in/bohdan-antoshka-272a681b7/?originalSubdomain=ua"
        target="_blank"
        class="profile__link"
        ><MIcon icon="mdiLinkedin"
      /></a>
      <a
        href="https://github.com/PliskoBogdan"
        target="_blank"
        class="profile__link"
        ><MIcon icon="mdiGithub"
      /></a>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Contact {
  id: number;
  title: String;
  subtitle: String;
  icon: String;
}

const contacts: Contact[] = [
  {
    title: "Email",
    subtitle: "fanatamas64@gmail.com",
    icon: "mdiEmailOutline",
    id: 1,
  },
  { title: "Phone", subtitle: "+38 (099) 915 1114", icon: "mdiPhone", id: 2 },
  {
    title: "Birthday",
    subtitle: "19.08.2001",
    icon: "mdiCalendarBlankOutline",
    id: 3,
  },
  { title: "Location", subtitle: "Ukraine / Kharkiv", icon: "mdiCity", id: 4 },
];
</script>

<style lang="scss" scoped>
.profile {
  border-radius: 0.6rem;
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.3rem;

  &__name {
    color: theme("colors.white.text");
    text-align: center;
    font-weight: 600;
    font-size: 20px;
  }
  &__separator {
    width: 100%;
    height: 1px;
    background: theme("colors.grey.300");
    margin: 1rem 0;
  }
  &__role {
    display: flex;
    justify-content: center;
  }
  &__role-title {
    padding: 0.2rem 1rem;
    background: theme("colors.grey.300");
    border-radius: var(--border-main);
    color: theme("colors.white.text");
    font-size: 14px;
  }
  &__avatar-block {
    display: flex;
    justify-content: center;
  }
  &__avatar {
    background: theme("colors.grey.100");
    border-radius: var(--border-main);
  }
  &__links{ 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  &__link {
    :deep(path) {
      fill: theme('colors.yellow.300') !important
    }

    &:hover {
      :deep(path) {
        transition: .5s;
        fill: theme('colors.yellow.200') !important
      }
    }
    svg {
      width: 2rem !important;
      height: 2rem !important;
    }
  }
}
</style>
