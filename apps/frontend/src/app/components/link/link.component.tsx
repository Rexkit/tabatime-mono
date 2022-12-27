import { FC, ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

import { LinkStyled } from './link.styles';

export interface ILink extends LinkProps {
  children?: ReactNode;
}

const Link: FC<LinkProps> = ({ children, ...restProps }) => {
  return <LinkStyled {...restProps}>{children}</LinkStyled>;
};

export default Link;
