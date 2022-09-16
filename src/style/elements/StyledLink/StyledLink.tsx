import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

type LinkProps = {
  isIcon?: boolean;
};

const StyledLink = styled(Link)<LinkProps>`
  padding: 16px 58px;
  color: #fff;
  font-size: 14px;
  font-family: Arial, sans-serif;
  line-height: 17px;
  letter-spacing: 1px;
  text-align: left;
  background: #222;
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;
  border: unset;
  display: block;
  text-align: center;
  min-width: 200px;
  min-height: 50px;

  &:hover {
    background-color: #a79bdf;
  }

  ${({ isIcon }) =>
    isIcon &&
    css`
      width: 40px;
      min-width: 40px;
      height: 40px;
      min-height: 40px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
    `}
`;

export default StyledLink;
