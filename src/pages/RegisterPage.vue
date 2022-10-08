<template>
  <auth-page
    name="Регистрация"
    :is-loading="isLoading"
    alternative-text="Уже есть аккаунт?"
    alternative-label="Вход"
    alternative-link="/log-in"
    @submit="onSubmit"
  />
</template>

<script lang="ts">
import { api } from 'src/boot/axios';
import { defineComponent } from 'vue';
import AuthPage from 'src/components/AuthPage.vue';

export default defineComponent({
  name: 'RegisterPage',
  data() {
    return {
      isLoading: false,
    };
  },

  components: { AuthPage },

  methods: {
    // todo: remove 'any'
    async onSubmit(credentials: any) {
      this.isLoading = true;

      const register = async () => {
        await api.post('auth/register', credentials);
        this.$router.push('/profile');
      };

      const handleError = (err: any) => {
        if (err.response.status === 409) {
          this.$q.notify({
            type: 'info',
            color: 'primary',
            message:
              'Пользователь с таким email уже существует. Пожалуйста, введите другой email или нажмите "Вход" для входа в систему',
          });
        } else {
          throw err;
        }
      };

      try {
        await register();
      } catch (err) {
        handleError(err);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
</script>
