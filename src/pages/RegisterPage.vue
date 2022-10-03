<template>
  <div class="q-mx-auto" style="max-width: 17rem">
    <header><h1 class="q-py-sm text-h5 text-center">Регистрация</h1></header>

    <main>
      <q-form @submit="onSubmit" class="q-gutter-sm" novalidate>
        <q-input
          v-model="email"
          type="email"
          label="Email:"
          lazy-rules
          :rules="emailRules"
        />
        <q-input
          v-model="password"
          type="password"
          label="Пароль:"
          lazy-rules
          :rules="passwordRules"
        />

        <div>
          <q-btn
            :loading="isLoading"
            label="Регистрация"
            type="submit"
            color="primary"
            class="block q-mx-auto"
          />
        </div>
      </q-form>
    </main>

    <footer class="column items-center justify-center q-mt-xl">
      <p>Уже есть аккаунт?</p>
      <q-btn to="/log-in" label="Вход" flat color="primary" />
    </footer>
  </div>
</template>

<script lang="ts">
import { EmbeddedValidationRule, EmbeddedValidationRuleFn } from 'quasar';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      minPwdLength: 6,
      maxPwdLength: 10,
    };
  },
  methods: {
    onSubmit() {
      this.isLoading = true;
      console.log(this.email, this.password);
      setTimeout(() => (this.isLoading = false), 3000);
    },
  },
  computed: {
    emailRules() {
      return [
        (val: string) => !!val || 'Пожалуйста, введите адрес электронной почты',
        (
          val: string,
          rules: Record<
            EmbeddedValidationRule,
            EmbeddedValidationRuleFn<string>
          >
        ) =>
          rules.email(val) ||
          'Пожалуйста, введите корректный адрес электронной почты',
      ];
    },
    passwordRules() {
      return [
        (val: string) =>
          (val &&
            val.length >= this.minPwdLength &&
            val.length <= this.maxPwdLength) ||
          `Пароль должен содержать от ${this.minPwdLength} до ${this.maxPwdLength} символов`,
      ];
    },
  },
});
</script>
