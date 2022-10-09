<template>
  <header>
    <h1 class="q-py-sm text-h5 text-center">Добро пожаловать!</h1>
  </header>
  <main class="container">
    <div class="grid" v-if="!error">
      <user-info-row label="Имя:" :info="name" />
      <user-info-row label="Телефон:" :info="phoneNumber" />
      <user-info-row label="Email:" :info="email" />
      <user-info-row label="Адрес:" :info="address" />
      <user-info-row label="Информация о себе:" :info="info" />
    </div>

    <div class="row items-center justify-around q-py-lg">
      <q-btn
        label="Выход"
        color="negative"
        :loading="isLoading"
        @click="onExit"
      />
      <q-btn label="Редактировать" color="primary" @click="onEdit" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { api } from '../boot/axios';
import UserInfoRow from './UserInfoRow.vue';
import { removeToken } from '../lib/token';
import { useQuasar } from 'quasar';
import { getUser } from '../lib/user';

export default defineComponent({
  name: 'UserInfo',

  data() {
    return {
      isLoading: false,
    };
  },

  components: { UserInfoRow },

  async setup() {
    const { email, userInfo, error } = await getUser();

    return {
      email,
      name: userInfo?.name,
      phoneNumber: userInfo?.phoneNumber,
      address: userInfo?.address,
      info: userInfo?.info,
      error,
    };
  },

  methods: {
    onEdit() {
      this.$router.push('/profile/edit');
    },
    async onExit() {
      this.isLoading = true;
      try {
        await api.get('auth/logout');
        removeToken();
        this.$router.push('/log-in');
      } finally {
        this.isLoading = false;
      }
    },
  },
});
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: max-content 1fr;
  row-gap: 0.6rem;
  column-gap: 1rem;
  margin-left: 8rem;
}

.container {
  overflow-wrap: anywhere;
}
</style>
