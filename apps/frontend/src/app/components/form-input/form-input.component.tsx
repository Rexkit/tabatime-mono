import { InputHTMLAttributes, FC, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import {
  FormErrorMessage,
  FormInputElement,
  FormInputGroup,
  FormLabelElement,
} from './form-input.styles';

interface IFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  error?: FieldError;
}

const FormInput = forwardRef<HTMLInputElement, IFormInputProps>(
  ({ labelText, error, ...restProps }, ref) => {
    return (
      <FormInputGroup>
        <FormInputElement
          placeholder={restProps.placeholder || ' '}
          {...restProps}
          aria-invalid={Boolean(error)}
          hasError={Boolean(error)}
          ref={ref}
        />
        <FormLabelElement htmlFor={restProps.id}>{labelText}</FormLabelElement>
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormInputGroup>
    );
  }
);

export default FormInput;
