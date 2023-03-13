import { GENERIC_ERROR_MESSAGE } from "@shared/constants/generic-error-message.constant";

export const ERRORS_MESSAGE = new Map()
  .set('auth/email-already-in-use', 'E-mail já cadastrado!')
  .set('auth/invalid-email', 'E-mail inválido!')
  .set('auth/operation-not-allowed', GENERIC_ERROR_MESSAGE)
  .set('auth/weak-password', 'Tente uma senha mais forte!');
