import { Notify } from 'quasar';
import { api } from '../boot/axios';

export async function getUser() {
  let email;
  let userInfo;
  let error = false;

  try {
    const res = await api.get('users');
    ({ email, userInfo } = res.data);
  } catch (err) {
    error = true;
    Notify.create({
      type: 'negative',
      message:
        'Не удалось получить данные. Пожалуйста, повторите попытку позже',
    });
  }

  return { email, userInfo, error };
}
