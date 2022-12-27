import { useForm, SubmitHandler } from 'react-hook-form';

import AppForm from '@components/app-form';
import FormInput from '@components/form-input';
import Button from '@components/button';
import { Link } from '@components/link';
import { BUTTON_TYPE_CLASSES } from '@components/button/button.component';
import { ILoginFormInputs } from '@app-types/form.types';
import { PWD_REGEX, USER_REGEX } from '@/constants';
import { Logo } from '@components/logo';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>();

  const onSubmit: SubmitHandler<ILoginFormInputs> = (data) => console.log(data);

  return (
    <>
      <Logo />
      <AppForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign In</h2>
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
          labelText="Password"
          type="password"
          id="password"
          {...register('password', { required: true, pattern: PWD_REGEX })}
        />
        <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.primary}>
          Login
        </Button>
        <Link to="/register">I don't have an account</Link>
      </AppForm>
    </>
  );
};

export default LoginForm;