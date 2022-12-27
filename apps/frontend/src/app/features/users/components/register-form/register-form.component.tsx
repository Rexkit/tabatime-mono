import { useForm, SubmitHandler } from 'react-hook-form';

import AppForm from '@components/app-form';
import FormInput from '@components/form-input';
import Button from '@components/button';
import { Link } from '@components/link';
import { BUTTON_TYPE_CLASSES } from '@components/button/button.component';
import { IRegisterFormInputs } from '@app-types/form.types';
import {
  EMAIL_REGEX,
  FORM_ERROR_MESSAGES,
  PWD_REGEX,
  USER_REGEX,
} from '@/constants';
import { useRegisterMutation } from '@/services/authApi';
import { getFormHooksOptions } from '@/utils/forms.utils';

const RegisterForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormInputs>({
    mode: 'onChange',
  });
  const [registerUser, { isLoading, isSuccess, error, isError }] =
    useRegisterMutation();

  const onSubmit: SubmitHandler<IRegisterFormInputs> = (data) => {
    registerUser(data);
  };

  console.log(errors);

  return (
    <AppForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign Up</h2>
      <FormInput
        labelText="Username"
        type="text"
        id="username"
        error={errors.username}
        {...register('username', getFormHooksOptions(true, USER_REGEX))}
      />
      <FormInput
        labelText="Email"
        type="email"
        id="email"
        error={errors.email}
        {...register('email', getFormHooksOptions(true, EMAIL_REGEX))}
      />
      <FormInput
        labelText="Password"
        type="password"
        id="password"
        error={errors.password}
        {...register('password', getFormHooksOptions(true, PWD_REGEX))}
      />
      <FormInput
        labelText="Confirm password"
        type="password"
        id="confirm-password"
        error={errors['confirm-password']}
        {...register('confirm-password', {
          required: FORM_ERROR_MESSAGES.required,
          validate: (val: string) => {
            if (watch('password') != val) {
              return 'Your passwords do no match';
            }
          },
        })}
      />
      <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.primary}>
        Register
      </Button>
      <Link to="/login">I already have an account</Link>
    </AppForm>
  );
};

export default RegisterForm;
