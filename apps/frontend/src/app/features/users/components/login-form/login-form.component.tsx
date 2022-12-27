import { useForm, SubmitHandler } from 'react-hook-form';

import AppForm from '@components/app-form';
import FormInput from '@components/form-input';
import Button from '@components/button';
import { Link } from '@components/link';
import { BUTTON_TYPE_CLASSES } from '@components/button/button.component';
import { ILoginFormInputs } from '@app-types/form.types';
import { PWD_REGEX, USER_REGEX } from '@/constants';
import { useLoginMutation } from '@/services/authApi';
import { getFormHooksOptions } from '@/utils/forms.utils';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>();
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit: SubmitHandler<ILoginFormInputs> = (data) => {
    login(data).then((data) => console.log(data));
  };

  return (
    <AppForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign In</h2>
      <FormInput
        labelText="Username"
        type="text"
        id="username"
        error={errors.username}
        {...register('username', getFormHooksOptions(true, USER_REGEX))}
      />
      <FormInput
        labelText="Password"
        type="password"
        id="password"
        error={errors.password}
        {...register('password', getFormHooksOptions(true, PWD_REGEX))}
      />
      <Button
        type="submit"
        isLoading={isLoading}
        buttonType={BUTTON_TYPE_CLASSES.primary}
      >
        Login
      </Button>
      <Link to="/register">I don't have an account</Link>
    </AppForm>
  );
};

export default LoginForm;
