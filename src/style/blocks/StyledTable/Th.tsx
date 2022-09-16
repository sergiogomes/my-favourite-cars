import styled, { css } from 'styled-components';

import { device } from '../../device';

type ThProps = {
  textAlignment?: string;
};

const Th = styled.th<ThProps>`
  padding: 6px;
  font-size: 10px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: lighter;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: unset;

  @media ${device.tablet} {
    font-size: 14px;
    line-height: 22px;
    padding: 12px 15px;
  }

  ${({ textAlignment }) =>
    textAlignment &&
    css`
      text-align: ${textAlignment};
    `}
`;

export default Th;
