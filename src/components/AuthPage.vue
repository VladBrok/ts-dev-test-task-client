<template>
  <div class="q-mx-auto" style="max-width: 18rem">
    <header>
      <h1 class="q-py-sm text-h5 text-center">{{ name }}</h1>
    </header>

    <main>
      <q-form @submit="onSubmit" class="q-gutter-sm" novalidate>
        <q-input
          lazy-rules
          v-model.trim="email"
          type="email"
          label="Email:"
          :rules="getEmailRules"
        />
        <q-input
          lazy-rules
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

const events = {
  submit: 'submit',
};

export default defineComponent({
  name: 'AuthPage',
  data() {
    return {
      email: '',
      password: '',
    };
  },

  emits: [events.submit],

  props: {
    name: {
      type: String,
      required: true,
    },
    isLoading: {
      type: Boolean,
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
      this.$emit(events.submit, {
        email: this.email,
        password: this.password,
      });
    },
  },

  computed: {
    getEmailRules,
    getPasswordRules: getPasswordRules({ isRequired: true }),
  },
});
</script>
