import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const LogoContainer = styled.div`
  text-align: center;
  padding: 20px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  user-select: none;
`;

const LogoText = styled.h1`
  margin-left: 10px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <FaHeart />
      <LogoText>TabaTime</LogoText>
    </LogoContainer>
  );
};

export default Logo;
