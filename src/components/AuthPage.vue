<template>
  <div class="q-mx-auto" style="max-width: 18rem">
    <header>
      <h1 class="q-py-sm text-h5 text-center">{{ name }}</h1>
    </header>

    <main>
      <q-form @submit="onSubmit" class="q-gutter-sm" novalidate>
        <q-input
          v-model.trim="email"
          type="email"
          label="Email:"
          :rules="getEmailRules"
        />
        <q-input
          v-model.trim="password"
          type="password"
          label="Пароль:"
          :rules="getPasswordRules"
        />

        <div class="q-my-lg">
          <q-btn
            :loading="isLoading"
            :label="name"
            type="submit"
            color="primary"
            class="block q-mx-auto"
          />
        </div>
      </q-form>
    </main>

    <footer class="column items-center justify-center q-mt-xl">
      <p>{{ alternativeText }}</p>
      <q-btn
        :to="alternativeLink"
        :label="alternativeLabel"
        flat
        color="primary"
      />
    </footer>
  </div>
</template>

<script lang="ts">
import { getEmailRules, getPasswordRules } from 'src/lib/rules';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AuthPage',
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
    };
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    alternativeText: {
      type: String,
      required: true,
    },
    alternativeLabel: {
      type: String,
      required: true,
    },
    alternativeLink: {
      type: String,
      required: true,
    },
  },

  methods: {
    onSubmit() {
      this.isLoading = true;
      console.log(this.email, this.password);
      setTimeout(() => {
        this.isLoading = false;
        this.$router.push('/profile');
      }, 1500);
    },
  },

  computed: {
    getEmailRules,
    getPasswordRules: getPasswordRules({ isRequired: true }),
  },
});
</script>
