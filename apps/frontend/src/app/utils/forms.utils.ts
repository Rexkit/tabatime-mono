import { RegisterOptions } from 'react-hook-form';

import { FORM_ERROR_MESSAGES } from '@/constants';

export const getFormHooksOptions = (
  required: boolean,
  regexp?: RegExp
): RegisterOptions => ({
  required: required ? FORM_ERROR_MESSAGES.required : undefined,
  pattern: regexp
    ? { value: regexp, message: FORM_ERROR_MESSAGES.pattern }
    : undefined,
});
