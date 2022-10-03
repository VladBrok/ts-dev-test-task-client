<template>
  <auth-page
    name="Вход"
    alternative-text="Ещё нет аккаунта?"
    alternative-label="Регистрация"
    alternative-link="/"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthPage from 'src/components/AuthPage.vue';

export default defineComponent({
  name: 'LogInPage',
  components: { AuthPage },
});
</script>
