<template>
  <div class="q-mx-auto" style="max-width: 20rem">
    <main class="q-mt-lg" v-if="!error">
      <q-form @submit="onSubmit" class="q-gutter-md" novalidate>
        <q-input
          lazy-rules
          v-model.trim="name"
          type="text"
          label="Имя:"
          :rules="getNameRules"
        />
        <q-input
          lazy-rules
          v-model.trim="phoneNumber"
          type="text"
          label="Телефон:"
          :rules="getPhoneNumberRules"
          hint="Пример: +74440002200"
        />
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
          label="Новый пароль:"
          :rules="getPasswordRules"
        />
        <q-input
          lazy-rules
          v-model.trim="address"
          type="text"
          label="Адрес:"
          :rules="getAddressRules"
        />
        <q-input
          lazy-rules
          v-model.trim="info"
          type="textarea"
          label="Информация о себе:"
          :rules="getInfoRules"
        />

        <div
          class="row q-gutter-y-md items-center justify-between q-mt-sm q-mb-lg"
        >
          <q-btn
            label="Удалить аккаунт"
            color="negative"
            @click="onDelete"
            :loading="isDeleting"
          />
          <q-btn
            label="Сохранить"
            type="submit"
            color="primary"
            :loading="isSaving"
          />
        </div>
      </q-form>
    </main>
  </div>
</template>

<script lang="ts">
import {
  getAddressRules,
  getEmailRules,
  getInfoRules,
  getNameRules,
  getPasswordRules,
  getPhoneNumberRules,
} from 'src/lib/rules';
import { defineComponent, ref } from 'vue';
import { api } from '../boot/axios';
import { useQuasar } from 'quasar';
import { getUser } from '../lib/user';

export default defineComponent({
  name: 'EditUser',

  async setup() {
    const { email, userInfo, error } = await getUser();

    const createRef = (value) => ref(value ?? '');

    return {
      email: createRef(email),
      name: createRef(userInfo?.name),
      phoneNumber: createRef(userInfo?.phoneNumber),
      address: createRef(userInfo?.address),
      info: createRef(userInfo?.info),
      password: createRef(),
      isSaving: false,
      isDeleting: false,
      error,
    };
  },

  methods: {
    onDelete() {
      const deleteAccount = async () => {
        this.isDeleting = true;

        try {
          await api.delete('users');
          this.$q.notify({
            type: 'info',
            color: 'primary',
            message: 'Аккаунт удален',
          });
          this.$router.push('/');
        } finally {
          this.isDeleting = false;
        }
      };

      this.$q
        .dialog({
          title: 'Подтверждение',
          message: 'Вы уверены, что хотите удалить аккаунт?',
          cancel: 'Отмена',
          ok: 'ОК',
          persistent: true,
        })
        .onOk(deleteAccount);
    },
    async onSubmit() {
      this.isSaving = true;
      const undefinedIfEmpty = (value) => value || undefined;

      try {
        await api.put('users', {
          email: this.email,
          name: undefinedIfEmpty(this.name),
          phoneNumber: undefinedIfEmpty(this.phoneNumber),
          address: undefinedIfEmpty(this.address),
          info: undefinedIfEmpty(this.info),
          password: undefinedIfEmpty(this.password),
        });
        this.$q.notify({
          type: 'info',
          color: 'primary',
          message: 'Данные сохранены!',
        });
        this.$router.push('/profile');
      } finally {
        this.isSaving = false;
      }
    },
  },

  computed: {
    getEmailRules,
    getPasswordRules: getPasswordRules({ isRequired: false }),
    getNameRules,
    getPhoneNumberRules,
    getAddressRules,
    getInfoRules,
  },
});
</script>
