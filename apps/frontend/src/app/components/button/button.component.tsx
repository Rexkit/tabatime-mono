import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { PrimaryButton, SecondaryButton } from './button.styles';

export enum BUTTON_TYPE_CLASSES {
  primary = 'primary',
  secondary = 'secondary',
}

const getButton = (buttonType: BUTTON_TYPE_CLASSES): typeof PrimaryButton =>
  ({
    [BUTTON_TYPE_CLASSES.primary]: PrimaryButton,
    [BUTTON_TYPE_CLASSES.secondary]: SecondaryButton,
  }[buttonType]);

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonType: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
}

const Button: FC<IButton> = ({
  children,
  buttonType,
  isLoading,
  ...restProps
}) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton disabled={isLoading} {...restProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
