<template>
  <auth-page
    name="Регистрация"
    alternative-text="Уже есть аккаунт?"
    alternative-label="Вход"
    alternative-link="/log-in"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthPage from 'src/components/AuthPage.vue';

export default defineComponent({
  name: 'RegisterPage',
  components: { AuthPage },
});
</script>
