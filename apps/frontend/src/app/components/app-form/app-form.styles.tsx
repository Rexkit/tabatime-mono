import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;

  & > * {
    margin-top: 35px;

    &:first-child {
      margin-top: 0;
    }
  }
`;
