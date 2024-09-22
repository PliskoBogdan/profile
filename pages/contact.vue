<template>
  <div class="contact">
    <MMaps class="contact__maps" />
    <h2 class="contact__form-title">Contact Form</h2>

    <div class="contact__form">
      <MInput
        v-model="formData.userName"
        class="contact__form-name"
        label="Full name"
      />
      <MInput
        v-model="formData.userEmail"
        :validation="[emailRule]"
        class="contact__form-email"
        label="Email address"
      />
      <MTextarea
        v-model="formData.userMessage"
        class="contact__form-message"
        placeholder="Your message"
      />
      <div class="contact__form-submit">
        <Mbutton :disabled="!isFormDataValid">
          <NuxtImg
            src="/images/send.svg"
            :placeholder="[30, 20]"
            width="20"
            height="20"
          />
          Send Message
        </Mbutton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const formData = reactive({
  userName: "",
  userEmail: "",
  userMessage: "",
});

const emailRule = (value: string): boolean => {
  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return value !== "" && emailRegex.test(value);
};

const isFormDataValid = computed<boolean>(
  () => formData.userName !== "" && emailRule(formData.userEmail)
);
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  &__maps {
    height: 30vh !important;
  }

  &__form-title {
    font-size: 20px;
    font-weight: 700;
    color: theme("colors.white.default");
  }
  &__form {
    display: grid;
    grid-template-areas:
      "contact__form-name contact__form-email"
      "contact__form-message contact__form-message"
      "contact__form-submit contact__form-submit";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 1rem;
    // padding-top: 1rem;
  }
  &__form-name {
    grid-area: contact__form-name;
  }
  &__form-email {
    grid-area: contact__form-email;
  }
  &__form-message {
    grid-area: contact__form-message;
  }
  &__form-submit {
    grid-area: contact__form-submit;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
