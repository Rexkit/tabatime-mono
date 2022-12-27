import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  color: ${({ theme }) => theme.colors.font};
`;
