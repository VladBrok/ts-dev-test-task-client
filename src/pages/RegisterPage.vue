<template>
  <div class="q-mx-auto" style="max-width: 18rem">
    <header><h1 class="q-py-sm text-h5 text-center">Регистрация</h1></header>

    <main>
      <q-form @submit="onSubmit" class="q-gutter-sm" novalidate>
        <q-input
          v-model="email"
          type="email"
          label="Email:"
          lazy-rules
          :rules="getEmailRules"
        />
        <q-input
          v-model="password"
          type="password"
          label="Пароль:"
          lazy-rules
          :rules="getPasswordRules"
        />

        <div class="q-my-lg">
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
    getEmailRules() {
      const notEmpty = (val: string) =>
        !!val || 'Пожалуйста, введите адрес электронной почты';
      const isEmail = (
        val: string,
        rules: Record<EmbeddedValidationRule, EmbeddedValidationRuleFn<string>>
      ) =>
        rules.email(val) ||
        'Пожалуйста, введите корректный адрес электронной почты';

      return [notEmpty, isEmail];
    },
    getPasswordRules() {
      const min = 6;
      const max = 16;
      const longEnough = (val: string) =>
        (val && val.length >= min && val.length <= max) ||
        `Пароль должен содержать от ${min} до ${max} символов`;
      const containsUppercase = (val: string) =>
        /[A-Z]/.test(val) ||
        'Пароль должен содержать латинскую букву в верхнем регистре';
      const containsLowercase = (val: string) =>
        /[a-z]/.test(val) ||
        'Пароль должен содержать латинскую букву в нижнем регистре';
      const containsNumber = (val: string) =>
        /[0-9]/.test(val) || 'Пароль должен содержать число';

      const special = '#?!@$%^&*-';
      const displaySpecial = special.split('').join(' ');
      const specialRegex = new RegExp(`[${special}]`);
      const containsSpecial = (val: string) =>
        specialRegex.test(val) ||
        `Пароль должен содержать один из следующих символов: ${displaySpecial}`;

      const allowed = new RegExp(`^[A-Za-z0-9${special}]+$`);
      const containsOnlyAllowed = (val: string) =>
        allowed.test(val) ||
        `Пароль может содержать только латинские буквы, цифры, и один из символов: ${displaySpecial}`;

      return [
        longEnough,
        containsUppercase,
        containsLowercase,
        containsNumber,
        containsSpecial,
        containsOnlyAllowed,
      ];
    },
  },
});
</script>
