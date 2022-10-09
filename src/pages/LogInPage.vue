<template>
  <auth-page
    name="Вход"
    :is-loading="isLoading"
    alternative-text="Ещё нет аккаунта?"
    alternative-label="Регистрация"
    alternative-link="/"
    @submit="onSubmit"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthPage from 'src/components/AuthPage.vue';
import { api } from 'src/boot/axios';
import { Credentials } from 'src/components/models';

export default defineComponent({
  name: 'LogInPage',
  data() {
    return {
      isLoading: false,
    };
  },

  components: { AuthPage },
  methods: {
    async onSubmit(credentials: Credentials) {
      this.isLoading = true;

      const logIn = async () => {
        await api.post('auth/login', {
          username: credentials.email,
          password: credentials.password,
        });
        this.$router.push('/profile');
      };

      const handleError = (err: any) => {
        if (err.response.status === 401) {
          this.$q.notify({
            type: 'negative',
            message:
              'Неверный email или пароль. Пожалуйста, перепроверьте введенные данные, или нажмите "Регистрация" для регистрации в системе',
          });
        } else {
          throw err;
        }
      };

      try {
        await logIn();
      } catch (err) {
        handleError(err);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
</script>
