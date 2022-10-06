import { EmbeddedValidationRule, EmbeddedValidationRuleFn } from 'quasar';

export function getPasswordRules({ isRequired }: { isRequired: boolean }) {
  return () => {
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
    const containsOnlyAllowed = (val: string) =>
      /^[A-Za-z0-9]+$/.test(val) ||
      'Пароль может содержать только цифры и латинские буквы';
    const requiredDecorator = (rule: (val: string) => boolean | string) => {
      return (val: string) => {
        if (!isRequired && !val) {
          return true;
        }
        return rule(val);
      };
    };

    return [
      longEnough,
      containsUppercase,
      containsLowercase,
      containsNumber,
      containsOnlyAllowed,
    ].map(requiredDecorator);
  };
}

export function getEmailRules() {
  const notEmpty = (val: string) =>
    !!val || 'Пожалуйста, введите адрес электронной почты';
  const isEmail = (
    val: string,
    rules: Record<EmbeddedValidationRule, EmbeddedValidationRuleFn<string>>
  ) =>
    rules.email(val) ||
    'Пожалуйста, введите корректный адрес электронной почты';

  return [notEmpty, isEmail];
}

export function getPhoneNumberRules() {
  const validFormat = (val: string) =>
    !val ||
    /^[+7]\d{10}$/.test(val) ||
    'Телефон должен начинаться с +7 и содержать 10 цифр';

  return [validFormat];
}

export function getAddressRules() {
  const max = 120;
  const longEnough = (val: string) =>
    val.length <= max || `Максимальное число символов: ${max}`;

  return [longEnough];
}

export function getNameRules() {
  const withoutSpecial = (val: string) =>
    !/[!@#$%^&*()+=-\[\]\\;,"'{}.<>:?|\/№]/.test(val) ||
    'Имя не должно содержать специальные символы';

  const max = 30;
  const longEnough = (val: string) =>
    val.length <= max || `Максимальная длина имени: ${max} символов`;

  return [withoutSpecial, longEnough];
}

export function getInfoRules() {
  const max = 200;
  const longEnough = (val: string) =>
    val.length <= max || `Максимальное число символов: ${max}`;

  return [longEnough];
}
