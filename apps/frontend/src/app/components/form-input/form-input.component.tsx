import { InputHTMLAttributes, FC, forwardRef } from 'react';

import {
  FormInputElement,
  FormInputGroup,
  FormLabelElement,
} from './form-input.styles';

interface IFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

const FormInput = forwardRef<HTMLInputElement, IFormInputProps>(
  ({ labelText, ...restProps }, ref) => {
    return (
      <FormInputGroup>
        <FormInputElement
          placeholder={restProps.placeholder || ' '}
          {...restProps}
          ref={ref}
        />
        <FormLabelElement htmlFor={restProps.id}>{labelText}</FormLabelElement>
      </FormInputGroup>
    );
  }
);

export default FormInput;
