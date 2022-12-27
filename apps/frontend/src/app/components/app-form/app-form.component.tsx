import { FC, ReactNode, FormHTMLAttributes } from 'react';
import { FormContainer } from './app-form.styles';

interface IAppFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const AppForm: FC<IAppFormProps> = ({ children, ...restProps }) => {
  return <FormContainer {...restProps}>{children}</FormContainer>;
};

export default AppForm;
