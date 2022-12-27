import { SpinnerContainer } from '@components/spinner/spinner.styles';
import styled from 'styled-components';

export const PrimaryButton = styled.button`
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.fontWhite};
  padding: 10px 10px;
  transform: scale(1);
  transition: transform ${({ theme }) => theme.durations.ms300}ms ease;

  &:disabled {
    filter: brightness(0.5);
    user-select: none;
    cursor: wait;

    &:hover {
      transform: scale(1);
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
