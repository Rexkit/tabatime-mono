import styled from 'styled-components';

export const AppLayoutContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.font};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

export const AppLayoutFrame = styled.div`
  width: ${({ theme }) => theme.sizes.container.width}px;
  height: 100%;
  margin: 2rem;
`;

export const ContentContainer = styled.div`
  height: calc(100vh - 88px);
  transform: translateY(-44px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
