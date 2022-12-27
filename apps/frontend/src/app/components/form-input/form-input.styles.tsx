import styled, { css } from 'styled-components';

export const FormInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const activeLabel = css`
  transform: translate(-15px, -35px) scale(0.9);
`;

export const FormLabelElement = styled.label`
  position: absolute;
  padding: 10px 10px;
  transform: translate(0, 0) scale(1);
  transition: transform ${({ theme }) => theme.durations.ms300}ms ease;
`;

export const FormErrorMessage = styled.p`
  position: absolute;
  bottom: 2px;
  right: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.danger};
`;

interface IFormInputElementProps {
  hasError: boolean;
}

const invalidField = css`
  background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.bgAlt} 95%,
      ${({ theme }) => theme.colors.danger} 95%
    )
    no-repeat;
`;

export const FormInputElement = styled.input<IFormInputElementProps>`
  position: relative;
  border: 0;
  border-radius: 5px;
  width: 250px;
  background-color: ${({ theme }) => theme.colors.bgAlt};
  color: ${({ theme }) => theme.colors.font};
  padding: 10px 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:not(:placeholder-shown) + ${FormLabelElement} {
    ${activeLabel}
  }

  ${({ hasError }) => hasError && invalidField}
`;
