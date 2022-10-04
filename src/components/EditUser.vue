<template>
  <div class="q-mx-auto" style="max-width: 20rem">
    <main class="q-mt-lg">
      <q-form @submit="onSubmit" class="q-gutter-md" novalidate>
        <q-input
          v-model.trim="name"
          type="text"
          label="Имя:"
          :rules="getNameRules"
        />
        <q-input
          v-model.trim="phoneNumber"
          type="text"
          label="Телефон:"
          :rules="getPhoneNumberRules"
          hint="Пример: +74440002200"
        />
        <q-input
          v-model.trim="email"
          type="email"
          label="Email:"
          :rules="getEmailRules"
        />
        <q-input
          v-model.trim="password"
          type="password"
          label="Новый пароль:"
          :rules="getPasswordRules"
        />
        <q-input
          v-model.trim="address"
          type="text"
          label="Адрес:"
          :rules="getAddressRules"
        />
        <q-input
          v-model.trim="info"
          type="textarea"
          label="Информация о себе:"
          :rules="getInfoRules"
        />

        <div
          class="row q-gutter-y-md items-center justify-between q-mt-sm q-mb-lg"
        >
          <q-btn label="Удалить аккаунт" color="negative" @click="onDelete" />
          <q-btn label="Сохранить" type="submit" color="primary" />
        </div>
      </q-form>
    </main>
  </div>
</template>

<script lang="ts">
import { info } from 'console';
import {
  getAddressRules,
  getEmailRules,
  getInfoRules,
  getNameRules,
  getPasswordRules,
  getPhoneNumberRules,
} from 'src/lib/rules';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'EditUser',
  async setup() {
    await new Promise((res, rej) => {
      setTimeout(() => res(''), 1500);
    });

    return {
      name: ref('Влад'),
      phoneNumber: ref('+383838383'),
      email: ref('vlad@brok.com'),
      address: ref(
        'Definitionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn and Usage. The word-wrap property allows long words to be able to be broken and wrap onto the next line. Show demo . Default value: normal. Inherited: yes. Animatable: no. Read about animatable.'
      ),
      info: ref(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex, consequuntur ullam assumenda provident culpa voluptatem adipisci veritatis, itaque officiis aperiam enim aliquam dolore veniam quam molestias doloribus, accusamus similique?'
      ),
      password: ref(''),
    };
  },

  methods: {
    onDelete() {
      this.$q
        .dialog({
          title: 'Подтверждение',
          message: 'Вы уверены, что хотите удалить аккаунт?',
          cancel: 'Отмена',
          ok: 'ОК',
          persistent: true,
        })
        .onOk(() => {
          this.$router.push('/');
        });
    },
    onSubmit() {
      this.$router.push('/profile');
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
