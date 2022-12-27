import { useForm, SubmitHandler } from 'react-hook-form';

import AppForm from '@components/app-form';
import FormInput from '@components/form-input';
import Button from '@components/button';
import { Link } from '@components/link';
import { BUTTON_TYPE_CLASSES } from '@components/button/button.component';
import { IRegisterFormInputs } from '@app-types/form.types';
import { EMAIL_REGEX, PWD_REGEX, USER_REGEX } from '@/constants';
import { Logo } from '@components/logo';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormInputs>();

  const onSubmit: SubmitHandler<IRegisterFormInputs> = (data) =>
    console.log(data);

  return (
    <>
      <Logo />
      <AppForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign Up</h2>
        <FormInput
          labelText="Username"
          type="text"
          id="username"
          {...register('username', {
            required: true,
            pattern: USER_REGEX,
          })}
        />
        <FormInput
          labelText="Email"
          type="email"
          id="email"
          {...register('email', { required: true, pattern: EMAIL_REGEX })}
        />
        <FormInput
          labelText="Password"
          type="password"
          id="password"
          {...register('password', { required: true, pattern: PWD_REGEX })}
        />
        <FormInput
          labelText="Confirm password"
          type="password"
          id="confirm-password"
          {...register('confirm-password', {
            required: true,
            pattern: PWD_REGEX,
          })}
        />
        <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.primary}>
          Register
        </Button>
        <Link to="/login">I already have an account</Link>
      </AppForm>
    </>
  );
};

export default RegisterForm;
