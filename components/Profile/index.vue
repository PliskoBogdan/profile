<template>
  <section class="profile bg-green-default">
    <div class="profile__avatar"></div>
    <h3 class="profile__role"></h3>
    <div class="profile__separator"></div>
    <ProfileContactBlock
      v-for="{ id, title, subtitle, icon } in contacts"
      :key="id"
      :title="title"
      :subtitle="subtitle"
      :icon="icon"
    />
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
  { title: "Email", subtitle: "fanatamas64@gmail.com", icon: "gmail", id: 1 },
  { title: "Phone", subtitle: "+380(99) 915 1114", icon: "gmail", id: 2 },
];

</script>

<style lang="scss" scoped>
.profile {
  width: 100%;
}
</style>
