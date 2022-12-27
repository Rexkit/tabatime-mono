import styled from 'styled-components';

export const AppLayoutContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.font};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AppLayoutFrame = styled.div`
  max-width: ${({ theme }) => theme.sizes.container.width}px;
  margin: 2rem;
`;
